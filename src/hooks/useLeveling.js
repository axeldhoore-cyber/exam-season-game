import { createContext, useContext } from "react";
import useLeveling from "../hooks/useLeveling";

const LevelingContext = createContext();

export function LevelingProvider({ children }) {
  const leveling = useLeveling();

  return (
    <LevelingContext.Provider value={leveling}>
      {children}
    </LevelingContext.Provider>
  );
}

export function useLevelingContext() {
  return useContext(LevelingContext);
}
