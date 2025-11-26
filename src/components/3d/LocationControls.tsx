import React from "react";
import { type Location3D, type CubeControlState } from "@/lib/types";

interface Props {
  locations: Location3D[];
  state: CubeControlState;
  onLocationClick: (locationId: string) => void;
  onReset: () => void;
}

export const LocationControls: React.FC<Props> = ({
  locations,
  state,
  onLocationClick,
  onReset,
}) => {
  return (
    <div style={styles.container}>
      <h3 style={styles.title}>Energy Consultation Points</h3>

      <div style={styles.status}>
        Status: {state.isFrozen ? "🔒 Frozen (10s)" : "🔄 Auto-rotating"}
        {state.currentLocation && (
          <span style={styles.currentLocation}>
            → {state.currentLocation.name}
          </span>
        )}
      </div>

      <div style={styles.buttonGrid}>
        {locations.map((location) => (
          <button
            key={location.id}
            onClick={() => onLocationClick(location.id)}
            disabled={
              state.isFrozen && state.currentLocation?.id === location.id
            }
            style={{
              ...styles.button,
              backgroundColor:
                state.currentLocation?.id === location.id
                  ? `#${location.color?.toString(16).padStart(6, "0")}`
                  : "#2a3142",
            }}
          >
            {location.name}
          </button>
        ))}
      </div>

      <button onClick={onReset} style={styles.resetButton}>
        Reset to Auto-Rotate
      </button>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  container: {
    padding: "20px",
    backgroundColor: "#1a1f2e",
    borderRadius: "8px",
    color: "white",
  },
  title: {
    marginTop: 0,
    marginBottom: "15px",
    fontSize: "18px",
    fontWeight: "600",
  },
  status: {
    marginBottom: "15px",
    padding: "10px",
    backgroundColor: "#2a3142",
    borderRadius: "4px",
    fontSize: "14px",
  },
  currentLocation: {
    marginLeft: "10px",
    color: "#4ecdc4",
    fontWeight: "bold",
  },
  buttonGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "10px",
    marginBottom: "15px",
  },
  button: {
    padding: "12px",
    border: "none",
    borderRadius: "6px",
    color: "white",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "500",
    transition: "all 0.2s",
  },
  resetButton: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#e74c3c",
    border: "none",
    borderRadius: "6px",
    color: "white",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "500",
  },
};
