import React, { useEffect, useRef, useState } from "react";
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
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cubeRef = useRef<THREE.Mesh | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1a1f2e);
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    cameraRef.current = camera;

    // Renderer
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
      color: color,
      roughness: 0.5,
      metalness: 0.5,
    });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    cubeRef.current = cube;

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Animation loop
    const animate = () => {
      animationFrameRef.current = requestAnimationFrame(animate);

      if (isRotating && cubeRef.current) {
        cubeRef.current.rotation.x += 0.01;
        cubeRef.current.rotation.y += 0.01;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    };
  }, [color, isRotating]);

  // Update cube rotation when props change (but don't interfere with auto-rotation)
  useEffect(() => {
    if (cubeRef.current && !isRotating) {
      cubeRef.current.rotation.x = rotation.x;
      cubeRef.current.rotation.y = rotation.y;
      cubeRef.current.rotation.z = rotation.z;
    }
  }, [rotation, isRotating]);

  // Update cube rotation when props change
  useEffect(() => {
    if (cubeRef.current) {
      cubeRef.current.rotation.x = rotation.x;
      cubeRef.current.rotation.y = rotation.y;
      cubeRef.current.rotation.z = rotation.z;
    }
  }, [rotation]);

  // Update cube position when props change
  useEffect(() => {
    if (cubeRef.current) {
      cubeRef.current.position.x = position.x;
      cubeRef.current.position.y = position.y;
      cubeRef.current.position.z = position.z;
    }
  }, [position]);

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
