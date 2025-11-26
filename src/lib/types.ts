export interface Location3D {
  id: string;
  name: string;
  position: { x: number; y: number; z: number };
  rotation: { x: number; y: number; z: number };
  color?: number;
}

export interface CubeControlState {
  currentLocation: Location3D | null;
  isRotating: boolean;
  isFrozen: boolean;
}

//ToDo Refactoring!
export const HOUSE_LOCATIONS: Location3D[] = [
  {
    id: "kitchen",
    name: "Kitchen",
    position: { x: -1, y: 0, z: 0 },
    rotation: { x: 0, y: Math.PI / 4, z: 0 },
    color: 0xff6b6b,
  },
  {
    id: "window",
    name: "Window",
    position: { x: 1, y: 1, z: 0 },
    rotation: { x: Math.PI / 6, y: -Math.PI / 4, z: 0 },
    color: 0x4ecdc4,
  },
  {
    id: "roof",
    name: "Roof",
    position: { x: 0, y: 1.5, z: 0 },
    rotation: { x: -Math.PI / 4, y: 0, z: 0 },
    color: 0xffe66d,
  },
  {
    id: "entrance",
    name: "Entrance",
    position: { x: 0, y: -1, z: 0.5 },
    rotation: { x: 0, y: Math.PI, z: 0 },
    color: 0xa8e6cf,
  },
];

export type Unspecified = "Sonstiges";

export type BuildingType =
  | "Reihenhaus"
  | "Doppelhaushaelfte"
  | "Einfamilienhaus"
  | "Mehrfamilienhaus"
  | Unspecified;

export type ConstructionType = "Altbau" | "Neubau" | Unspecified;

export type ConstructionPeriod = "";
