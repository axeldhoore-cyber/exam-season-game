// src/hooks/useLeveling.js

import { useContext } from "react";
import { LevelingContext } from "../context/LevelingContext";

// Este hook simplemente CONSUME el contexto.
// No implementa lógica duplicada.
// Es la versión correcta que evita errores.
export default function useLeveling() {
  const context = useContext(LevelingContext);

  if (!context) {
    throw new Error("useLeveling must be used inside a LevelingProvider");
  }

  return context;
}
