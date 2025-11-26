import React, { useEffect, useRef } from "react";
import * as THREE from "three";

interface Props {
  rotation?: { x: number; y: number; z: number };
  position?: { x: number; y: number; z: number };
  color?: number;
  isRotating?: boolean;
}

export const SimpleCube: React.FC<Props> = ({
  rotation = { x: 0, y: 0, z: 0 },
  position = { x: 0, y: 0, z: 0 },
  color = 0x4a90e2,
  isRotating = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cubeRef = useRef<THREE.Mesh | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const frameIdRef = useRef<number | null>(null);
  const isRotatingRef = useRef(isRotating);
  const rotationRef = useRef(rotation);
  const positionRef = useRef(position);
  const isMountedRef = useRef(true);

  // Keep refs in sync
  useEffect(() => {
    console.log("Updating refs - isRotating:", isRotating);
    isRotatingRef.current = isRotating;
    rotationRef.current = rotation;
    positionRef.current = position;
  }, [isRotating, rotation, position]);

  // Setup scene once
  useEffect(() => {
    if (!containerRef.current) return;

    console.log("Setting up 3D scene");
    isMountedRef.current = true;

    // Setup scene, camera, renderer
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1a1f2e);
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(
      containerRef.current.clientWidth,
      containerRef.current.clientHeight
    );
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create cube
    const geometry = new THREE.BoxGeometry(2, 2, 2);
    const material = new THREE.MeshStandardMaterial({
      color,
      roughness: 0.5,
      metalness: 0.5,
    });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    cubeRef.current = cube;

    // Lighting
    scene.add(new THREE.AmbientLight(0xffffff, 0.5));
    const light = new THREE.DirectionalLight(0xffffff, 0.8);
    light.position.set(5, 5, 5);
    scene.add(light);

    // Animation loop
    const animate = () => {
      // Check BEFORE requesting next frame
      if (!isMountedRef.current) {
        console.log("Animation stopped - component unmounted");
        return;
      }

      frameIdRef.current = requestAnimationFrame(animate);

      if (cubeRef.current) {
        if (isRotatingRef.current) {
          // Slower rotation, Z-axis only
          cubeRef.current.rotation.z += 0.003;
        } else {
          // Apply manual rotation
          cubeRef.current.rotation.set(
            rotationRef.current.x,
            rotationRef.current.y,
            rotationRef.current.z
          );
        }
        cubeRef.current.position.set(
          positionRef.current.x,
          positionRef.current.y,
          positionRef.current.z
        );
      }

      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };

    // Start animation
    console.log("Starting animation with isRotating:", isRotatingRef.current);
    animate();

    // Resize handler
    const handleResize = () => {
      if (!containerRef.current || !cameraRef.current || !rendererRef.current)
        return;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      cameraRef.current.aspect = width / height;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(width, height);
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      console.log("Cleaning up 3D scene - stopping animation");
      isMountedRef.current = false;

      window.removeEventListener("resize", handleResize);

      if (frameIdRef.current !== null) {
        console.log("Cancelling animation frame:", frameIdRef.current);
        cancelAnimationFrame(frameIdRef.current);
        frameIdRef.current = null;
      }

      if (containerRef.current && renderer.domElement) {
        try {
          if (containerRef.current.contains(renderer.domElement)) {
            containerRef.current.removeChild(renderer.domElement);
          }
        } catch (e) {
          console.warn("Error removing canvas:", e);
        }
      }

      renderer.dispose();
      geometry.dispose();
      material.dispose();

      cubeRef.current = null;
      rendererRef.current = null;
      cameraRef.current = null;
      sceneRef.current = null;
    };
  }, []); // Only run once!

  // Update color dynamically
  useEffect(() => {
    if (cubeRef.current) {
      (cubeRef.current.material as THREE.MeshStandardMaterial).color.setHex(
        color
      );
    }
  }, [color]);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
      }}
    />
  );
};
