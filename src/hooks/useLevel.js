// File: src/hooks/useLevel.js
import { useState, useEffect } from "react";
import { calculateLevel } from "../utils/levelFormula";

export function useLevel(totalXP) {
  const [levelData, setLevelData] = useState({
    level: 0,
    progress: 0,
    currentLevelXP: 0,
    nextLevelXP: 100
  });

  useEffect(() => {
    setLevelData(calculateLevel(totalXP));
  }, [totalXP]);

  return levelData;
}
