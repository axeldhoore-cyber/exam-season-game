// File: src/components/Level/LevelDisplay.jsx
import { useLevel } from "../../hooks/useLevel";

export default function LevelDisplay({ totalXP }) {
  const { level, progress, currentLevelXP, nextLevelXP } = useLevel(totalXP);

  return (
    <div className="w-full p-4 bg-neutral-900 text-white rounded-xl flex flex-col gap-2">
      <div className="flex justify-between">
        <span className="text-lg font-bold">Level {level}</span>
        <span className="text-sm">{Math.floor(progress)}%</span>
      </div>

      <div className="w-full h-3 bg-neutral-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-green-500 transition-all"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <div className="text-xs text-neutral-400">
        {currentLevelXP} XP → {nextLevelXP} XP
      </div>
    </div>
  );
}
