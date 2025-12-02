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
    setXP(prev => prev + amount);
  };

  const checkLevelUp = () => {
    const newLevel = getLevelFromXP(xp);
    if (newLevel > level) {
      const old = level;
      setLevel(newLevel);
      setUnspentAttributes(prev => prev + 1);
      return { levelUp: true, old, new: newLevel };
    }
    return { levelUp: false };
  };

  return (
    <LevelingContext.Provider
      value={{
        xp,
        level,
        unspentAttributes,
        addXP,
        checkLevelUp,
        setXP,
        setLevel,
        setUnspentAttributes,
      }}
    >
      {children}
    </LevelingContext.Provider>
  );
}
