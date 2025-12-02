// File: src/modules/LevelCurve/calcLevel.js
export function calcLevel(xp) {
  const a = 0.08;
  return Math.floor(a * Math.sqrt(xp));
}

// File: src/modules/LevelCurve/calcNextLevelXP.js
export function calcNextLevelXP(currentLevel) {
  const a = 0.08;
  const nextXp = ((currentLevel + 1) / a) ** 2;
  return Math.floor(nextXp);
}

// File: src/modules/LevelCurve/useLevelCurve.js
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

// File: src/modules/LevelCurve/LevelCurveDemo.jsx
import { useLevelCurve } from "./useLevelCurve";

export default function LevelCurveDemo() {
  const { xp, level, nextLevelXP, addXP } = useLevelCurve(0);

  return (
    <div className="p-4 bg-neutral-900 text-white rounded-xl space-y-4">
      <h1 className="text-xl font-bold">Curva de Progresión</h1>
      <p>XP: {xp}</p>
      <p>Nivel: {level}</p>
      <p>XP para siguiente nivel: {nextLevelXP}</p>

      <button
        onClick={() => addXP(50)}
        className="px-4 py-2 bg-blue-600 rounded-lg"
      >
        +50 XP
      </button>
    </div>
  );
}
