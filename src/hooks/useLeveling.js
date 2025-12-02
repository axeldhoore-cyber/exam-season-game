// src/hooks/useLeveling.js

import { useContext } from "react";
import { LevelingContext } from "../context/LevelingContext";

export default function useLeveling() {
  const context = useContext(LevelingContext);
  if (!context) {
    throw new Error("useLeveling must be used within a LevelingProvider");
  }
  return context;
}
