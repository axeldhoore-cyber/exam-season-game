import { useState, useEffect } from "react";
import { calcLevel } from "./calcLevel";
import { calcNextLevelXP } from "./calcNextLevelXP";

export function useLevelCurve(initialXP = 0) {
  const [xp, setXp] = useState(initialXP);
  const [level, setLevel] = useState(calcLevel(initialXP));
  const [nextLevelXP, setNextLevelXP] = useState(calcNextLevelXP(level));

  useEffect(() => {
    const newLevel = calcLevel(xp);
    setLevel(newLevel);
    setNextLevelXP(calcNextLevelXP(newLevel));
  }, [xp]);

  const addXP = (amount) => {
    setXp((prev) => prev + amount);
  };

  return { xp, level, nextLevelXP, addXP };
}