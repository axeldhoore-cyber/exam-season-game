// src/context/LevelingContext.jsx

import { createContext, useState } from "react";

export const LevelingContext = createContext();

export function LevelingProvider({ children }) {
  const [xp, setXP] = useState(0);
  const [level, setLevel] = useState(1);
  const [unspentAttributes, setUnspentAttributes] = useState(0);

  const getLevelFromXP = (totalXP) => {
    let lvl = 1;
    let required = 50;
    while (totalXP >= required) {
      lvl++;
      required = Math.floor(50 * Math.pow(lvl, 1.4));
    }
    return lvl;
  };

  const addXP = (amount) => {
    const newXP = xp + amount;
    const newLevel = getLevelFromXP(newXP);
    setXP(newXP);
    if (newLevel > level) {
      setLevel(newLevel);
      setUnspentAttributes(prev => prev + 1);
    }
  };

  return (
    <LevelingContext.Provider
      value={{
        xp,
        level,
        unspentAttributes,
        addXP,
        setXP,
        setLevel,
      }}
    >
      {children}
    </LevelingContext.Provider>
  );
}
