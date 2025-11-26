import React, { useState } from "react";
import { SimpleCube } from "./SimpleCube";

interface Rotation {
  x: number;
  y: number;
  z: number;
}

interface Position {
  x: number;
  y: number;
  z: number;
}

const CubeView: React.FC = () => {
  const [rotation, setRotation] = useState<Rotation>({ x: 0, y: 0, z: 0 });
  const [position, setPosition] = useState<Position>({ x: 0, y: 0, z: 0 });
  const [color, setColor] = useState<string>("#4a90e2");
  const [isRotating, setIsRotating] = useState<boolean>(true);

  // Convert hex color to THREE.js color format
  const hexToThreeColor = (hex: string): number => {
    return parseInt(hex.replace("#", "0x"), 16);
  };

  // Preset rotations
  const presets: Record<string, Rotation> = {
    reset: { x: 0, y: 0, z: 0 },
    tiltX: { x: Math.PI / 4, y: 0, z: 0 },
    tiltY: { x: 0, y: Math.PI / 4, z: 0 },
    diagonal: { x: Math.PI / 4, y: Math.PI / 4, z: 0 },
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "linear-gradient(135deg, #0a0e1a 0%, #1a1f2e 100%)",
        display: "flex",
        fontFamily: "'Space Mono', 'Courier New', monospace",
        color: "#fff",
      }}
    >
      {/* 3D Canvas */}
      <div style={{ flex: 1, position: "relative" }}>
        <SimpleCube
          rotation={rotation}
          position={position}
          color={hexToThreeColor(color)}
          isRotating={isRotating}
        />
      </div>

      {/* Control Panel */}
      <div
        style={{
          width: "320px",
          background: "rgba(10, 14, 26, 0.95)",
          padding: "2rem",
          overflowY: "auto",
          borderLeft: "1px solid rgba(74, 144, 226, 0.2)",
        }}
      >
        <h1
          style={{
            margin: "0 0 0.5rem 0",
            fontSize: "1.5rem",
            background: "linear-gradient(90deg, #4a90e2, #50c878)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          3D Cube Demo
        </h1>

        <p
          style={{
            fontSize: "0.75rem",
            color: "#8a9ba8",
            marginBottom: "2rem",
            lineHeight: "1.5",
          }}
        >
          Control the cube with the options below.
        </p>

        {/* Auto-rotate toggle */}
        <div style={{ marginBottom: "2rem" }}>
          <label
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              fontSize: "0.9rem",
              cursor: "pointer",
            }}
          >
            <input
              type="checkbox"
              checked={isRotating}
              onChange={(e) => setIsRotating(e.target.checked)}
              style={{ cursor: "pointer" }}
            />
            Auto-rotate
          </label>
        </div>

        {/* Color picker */}
        <div style={{ marginBottom: "2rem" }}>
          <label
            style={{
              display: "block",
              fontSize: "0.85rem",
              color: "#4a90e2",
              marginBottom: "0.5rem",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            Color
          </label>
          <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
            <input
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              style={{
                width: "60px",
                height: "40px",
                border: "1px solid rgba(74, 144, 226, 0.3)",
                borderRadius: "0.25rem",
                background: "transparent",
                cursor: "pointer",
              }}
            />
            <span
              style={{
                fontSize: "0.8rem",
                color: "#8a9ba8",
                fontFamily: "monospace",
              }}
            >
              {color}
            </span>
          </div>
        </div>

        {/* Rotation controls */}
        <div style={{ marginBottom: "2rem" }}>
          <div
            style={{
              fontSize: "0.85rem",
              color: "#4a90e2",
              marginBottom: "1rem",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            Rotation
          </div>

          {(["x", "y", "z"] as const).map((axis) => (
            <div key={axis} style={{ marginBottom: "1rem" }}>
              <label
                style={{
                  display: "block",
                  fontSize: "0.75rem",
                  color: "#8a9ba8",
                  marginBottom: "0.25rem",
                  textTransform: "uppercase",
                }}
              >
                {axis}-axis: {rotation[axis].toFixed(2)}
              </label>
              <input
                type="range"
                min={-Math.PI}
                max={Math.PI}
                step={0.01}
                value={rotation[axis]}
                onChange={(e) =>
                  setRotation({
                    ...rotation,
                    [axis]: parseFloat(e.target.value),
                  })
                }
                style={{
                  width: "100%",
                  cursor: "pointer",
                }}
              />
            </div>
          ))}
        </div>

        {/* Preset buttons */}
        <div style={{ marginBottom: "2rem" }}>
          <div
            style={{
              fontSize: "0.85rem",
              color: "#4a90e2",
              marginBottom: "0.5rem",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            Presets
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "0.5rem",
            }}
          >
            {Object.entries(presets).map(([name, preset]) => (
              <button
                key={name}
                onClick={() => setRotation(preset)}
                style={{
                  background: "rgba(74, 144, 226, 0.2)",
                  border: "1px solid rgba(74, 144, 226, 0.4)",
                  color: "#fff",
                  padding: "0.5rem",
                  borderRadius: "0.25rem",
                  fontSize: "0.75rem",
                  cursor: "pointer",
                  textTransform: "capitalize",
                  transition: "all 0.2s ease",
                  fontFamily: "inherit",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLButtonElement).style.background =
                    "rgba(74, 144, 226, 0.3)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLButtonElement).style.background =
                    "rgba(74, 144, 226, 0.2)";
                }}
              >
                {name}
              </button>
            ))}
          </div>
        </div>

        {/* Position controls */}
        <div style={{ marginBottom: "2rem" }}>
          <div
            style={{
              fontSize: "0.85rem",
              color: "#4a90e2",
              marginBottom: "1rem",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            Position
          </div>

          {(["x", "y", "z"] as const).map((axis) => (
            <div key={axis} style={{ marginBottom: "1rem" }}>
              <label
                style={{
                  display: "block",
                  fontSize: "0.75rem",
                  color: "#8a9ba8",
                  marginBottom: "0.25rem",
                  textTransform: "uppercase",
                }}
              >
                {axis}-axis: {position[axis].toFixed(2)}
              </label>
              <input
                type="range"
                min={-3}
                max={3}
                step={0.1}
                value={position[axis]}
                onChange={(e) =>
                  setPosition({
                    ...position,
                    [axis]: parseFloat(e.target.value),
                  })
                }
                style={{
                  width: "100%",
                  cursor: "pointer",
                }}
              />
            </div>
          ))}
        </div>

        {/* Reset all button */}
        <button
          onClick={() => {
            setRotation({ x: 0, y: 0, z: 0 });
            setPosition({ x: 0, y: 0, z: 0 });
            setColor("#4a90e2");
            setIsRotating(true);
          }}
          style={{
            width: "100%",
            background: "rgba(80, 200, 120, 0.2)",
            border: "1px solid rgba(80, 200, 120, 0.4)",
            color: "#fff",
            padding: "0.75rem",
            borderRadius: "0.5rem",
            fontSize: "0.85rem",
            cursor: "pointer",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            transition: "all 0.2s ease",
            fontFamily: "inherit",
          }}
          onMouseEnter={(e) => {
            (e.target as HTMLButtonElement).style.background =
              "rgba(80, 200, 120, 0.3)";
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLButtonElement).style.background =
              "rgba(80, 200, 120, 0.2)";
          }}
        >
          Reset All
        </button>

        {/* ...existing code... */}
      </div>

      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap');

          input[type="range"] {
            -webkit-appearance: none;
            appearance: none;
            height: 4px;
            background: rgba(74, 144, 226, 0.2);
            border-radius: 2px;
            outline: none;
          }

          input[type="range"]::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 16px;
            height: 16px;
            background: #4a90e2;
            border-radius: 50%;
            cursor: pointer;
          }

          input[type="range"]::-moz-range-thumb {
            width: 16px;
            height: 16px;
            background: #4a90e2;
            border-radius: 50%;
            cursor: pointer;
            border: none;
          }
        `}
      </style>
    </div>
  );
};

export default CubeView;

// import React, { useState } from "react";
// import { SimpleCube } from "./SimpleCube";

// const CubeDemo = () => {
//   const [rotation, setRotation] = useState({ x: 0, y: 0, z: 0 });
//   const [position, setPosition] = useState({ x: 0, y: 0, z: 0 });
//   const [color, setColor] = useState("#4a90e2");
//   const [isRotating, setIsRotating] = useState(true);

//   // Convert hex color to THREE.js color format
//   const hexToThreeColor = (hex) => {
//     return parseInt(hex.replace("#", "0x"), 16);
//   };

//   // Preset rotations
//   const presets = {
//     reset: { x: 0, y: 0, z: 0 },
//     tiltX: { x: Math.PI / 4, y: 0, z: 0 },
//     tiltY: { x: 0, y: Math.PI / 4, z: 0 },
//     diagonal: { x: Math.PI / 4, y: Math.PI / 4, z: 0 },
//   };

//   return (
//     <div
//       style={{
//         width: "100vw",
//         height: "100vh",
//         background: "linear-gradient(135deg, #0a0e1a 0%, #1a1f2e 100%)",
//         display: "flex",
//         fontFamily: "'Space Mono', 'Courier New', monospace",
//         color: "#fff",
//       }}
//     >
//       {/* 3D Canvas */}
//       <div style={{ flex: 1, position: "relative" }}>
//         <SimpleCube
//           rotation={rotation}
//           position={position}
//           color={hexToThreeColor(color)}
//           isRotating={isRotating}
//         />
//       </div>

//       {/* Control Panel */}
//       <div
//         style={{
//           width: "320px",
//           background: "rgba(10, 14, 26, 0.95)",
//           padding: "2rem",
//           overflowY: "auto",
//           borderLeft: "1px solid rgba(74, 144, 226, 0.2)",
//         }}
//       >
//         <h1
//           style={{
//             margin: "0 0 0.5rem 0",
//             fontSize: "1.5rem",
//             background: "linear-gradient(90deg, #4a90e2, #50c878)",
//             WebkitBackgroundClip: "text",
//             WebkitTextFillColor: "transparent",
//           }}
//         >
//           3D Cube Demo
//         </h1>

//         <p
//           style={{
//             fontSize: "0.75rem",
//             color: "#8a9ba8",
//             marginBottom: "2rem",
//             lineHeight: "1.5",
//           }}
//         >
//           Control the cube with the options below. This is a foundation for
//           building more complex 3D scenes.
//         </p>

//         {/* Auto-rotate toggle */}
//         <div style={{ marginBottom: "2rem" }}>
//           <label
//             style={{
//               display: "flex",
//               alignItems: "center",
//               gap: "0.5rem",
//               fontSize: "0.9rem",
//               cursor: "pointer",
//             }}
//           >
//             <input
//               type="checkbox"
//               checked={isRotating}
//               onChange={(e) => setIsRotating(e.target.checked)}
//               style={{ cursor: "pointer" }}
//             />
//             Auto-rotate
//           </label>
//         </div>

//         {/* Color picker */}
//         <div style={{ marginBottom: "2rem" }}>
//           <label
//             style={{
//               display: "block",
//               fontSize: "0.85rem",
//               color: "#4a90e2",
//               marginBottom: "0.5rem",
//               textTransform: "uppercase",
//               letterSpacing: "0.05em",
//             }}
//           >
//             Color
//           </label>
//           <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
//             <input
//               type="color"
//               value={color}
//               onChange={(e) => setColor(e.target.value)}
//               style={{
//                 width: "60px",
//                 height: "40px",
//                 border: "1px solid rgba(74, 144, 226, 0.3)",
//                 borderRadius: "0.25rem",
//                 background: "transparent",
//                 cursor: "pointer",
//               }}
//             />
//             <span
//               style={{
//                 fontSize: "0.8rem",
//                 color: "#8a9ba8",
//                 fontFamily: "monospace",
//               }}
//             >
//               {color}
//             </span>
//           </div>
//         </div>

//         {/* Rotation controls */}
//         <div style={{ marginBottom: "2rem" }}>
//           <div
//             style={{
//               fontSize: "0.85rem",
//               color: "#4a90e2",
//               marginBottom: "1rem",
//               textTransform: "uppercase",
//               letterSpacing: "0.05em",
//             }}
//           >
//             Rotation
//           </div>

//           {["x", "y", "z"].map((axis) => (
//             <div key={axis} style={{ marginBottom: "1rem" }}>
//               <label
//                 style={{
//                   display: "block",
//                   fontSize: "0.75rem",
//                   color: "#8a9ba8",
//                   marginBottom: "0.25rem",
//                   textTransform: "uppercase",
//                 }}
//               >
//                 {axis}-axis: {rotation[axis].toFixed(2)}
//               </label>
//               <input
//                 type="range"
//                 min={-Math.PI}
//                 max={Math.PI}
//                 step={0.01}
//                 value={rotation[axis]}
//                 onChange={(e) =>
//                   setRotation({
//                     ...rotation,
//                     [axis]: parseFloat(e.target.value),
//                   })
//                 }
//                 style={{
//                   width: "100%",
//                   cursor: "pointer",
//                 }}
//               />
//             </div>
//           ))}
//         </div>

//         {/* Preset buttons */}
//         <div style={{ marginBottom: "2rem" }}>
//           <div
//             style={{
//               fontSize: "0.85rem",
//               color: "#4a90e2",
//               marginBottom: "0.5rem",
//               textTransform: "uppercase",
//               letterSpacing: "0.05em",
//             }}
//           >
//             Presets
//           </div>
//           <div
//             style={{
//               display: "grid",
//               gridTemplateColumns: "1fr 1fr",
//               gap: "0.5rem",
//             }}
//           >
//             {Object.entries(presets).map(([name, preset]) => (
//               <button
//                 key={name}
//                 onClick={() => setRotation(preset)}
//                 style={{
//                   background: "rgba(74, 144, 226, 0.2)",
//                   border: "1px solid rgba(74, 144, 226, 0.4)",
//                   color: "#fff",
//                   padding: "0.5rem",
//                   borderRadius: "0.25rem",
//                   fontSize: "0.75rem",
//                   cursor: "pointer",
//                   textTransform: "capitalize",
//                   transition: "all 0.2s ease",
//                   fontFamily: "inherit",
//                 }}
//                 onMouseEnter={(e) => {
//                   e.target.style.background = "rgba(74, 144, 226, 0.3)";
//                 }}
//                 onMouseLeave={(e) => {
//                   e.target.style.background = "rgba(74, 144, 226, 0.2)";
//                 }}
//               >
//                 {name}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Position controls */}
//         <div style={{ marginBottom: "2rem" }}>
//           <div
//             style={{
//               fontSize: "0.85rem",
//               color: "#4a90e2",
//               marginBottom: "1rem",
//               textTransform: "uppercase",
//               letterSpacing: "0.05em",
//             }}
//           >
//             Position
//           </div>

//           {["x", "y", "z"].map((axis) => (
//             <div key={axis} style={{ marginBottom: "1rem" }}>
//               <label
//                 style={{
//                   display: "block",
//                   fontSize: "0.75rem",
//                   color: "#8a9ba8",
//                   marginBottom: "0.25rem",
//                   textTransform: "uppercase",
//                 }}
//               >
//                 {axis}-axis: {position[axis].toFixed(2)}
//               </label>
//               <input
//                 type="range"
//                 min={-3}
//                 max={3}
//                 step={0.1}
//                 value={position[axis]}
//                 onChange={(e) =>
//                   setPosition({
//                     ...position,
//                     [axis]: parseFloat(e.target.value),
//                   })
//                 }
//                 style={{
//                   width: "100%",
//                   cursor: "pointer",
//                 }}
//               />
//             </div>
//           ))}
//         </div>

//         {/* Reset all button */}
//         <button
//           onClick={() => {
//             setRotation({ x: 0, y: 0, z: 0 });
//             setPosition({ x: 0, y: 0, z: 0 });
//             setColor("#4a90e2");
//             setIsRotating(true);
//           }}
//           style={{
//             width: "100%",
//             background: "rgba(80, 200, 120, 0.2)",
//             border: "1px solid rgba(80, 200, 120, 0.4)",
//             color: "#fff",
//             padding: "0.75rem",
//             borderRadius: "0.5rem",
//             fontSize: "0.85rem",
//             cursor: "pointer",
//             textTransform: "uppercase",
//             letterSpacing: "0.05em",
//             transition: "all 0.2s ease",
//             fontFamily: "inherit",
//           }}
//           onMouseEnter={(e) => {
//             e.target.style.background = "rgba(80, 200, 120, 0.3)";
//           }}
//           onMouseLeave={(e) => {
//             e.target.style.background = "rgba(80, 200, 120, 0.2)";
//           }}
//         >
//           Reset All
//         </button>

//         {/* Info */}
//         <div
//           style={{
//             marginTop: "2rem",
//             padding: "1rem",
//             background: "rgba(74, 144, 226, 0.1)",
//             border: "1px solid rgba(74, 144, 226, 0.2)",
//             borderRadius: "0.5rem",
//             fontSize: "0.7rem",
//             color: "#8a9ba8",
//             lineHeight: "1.5",
//           }}
//         >
//           <strong style={{ color: "#4a90e2" }}>Next Steps:</strong>
//           <br />
//           Replace the cube with more complex geometries (house, buildings, etc.)
//           and add interactivity!
//         </div>
//       </div>

//       <style>
//         {`
//           @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap');

//           input[type="range"] {
//             -webkit-appearance: none;
//             appearance: none;
//             height: 4px;
//             background: rgba(74, 144, 226, 0.2);
//             border-radius: 2px;
//             outline: none;
//           }

//           input[type="range"]::-webkit-slider-thumb {
//             -webkit-appearance: none;
//             appearance: none;
//             width: 16px;
//             height: 16px;
//             background: #4a90e2;
//             border-radius: 50%;
//             cursor: pointer;
//           }

//           input[type="range"]::-moz-range-thumb {
//             width: 16px;
//             height: 16px;
//             background: #4a90e2;
//             border-radius: 50%;
//             cursor: pointer;
//             border: none;
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default CubeDemo;
