import { useState } from "react";

export default function useLeveling() {
  const [level, setLevel] = useState(1);
  const [xp, setXp] = useState(0);
  const [nextLevelXp, setNextLevelXp] = useState(100);
  const [showLevelUp, setShowLevelUp] = useState(false);

  function getRequiredXP(level) {
    return Math.floor(100 * Math.pow(level, 1.5));
  }

  function addXP(amount) {
    let newXP = xp + amount;

    if (newXP >= nextLevelXp) {
      const newLevel = level + 1;
      const newMax = getRequiredXP(newLevel);

      setLevel(newLevel);
      setNextLevelXp(newMax);
      setShowLevelUp(true);

      newXP = newXP - nextLevelXp;
    }

    setXp(newXP);
  }

  function closeLevelUp() {
    setShowLevelUp(false);
  }

  return {
    level,
    xp,
    nextLevelXp,
    addXP,
    showLevelUp,
    closeLevelUp,
  };
}
