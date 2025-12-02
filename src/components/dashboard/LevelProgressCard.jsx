// File: src/components/dashboard/LevelProgressCard.jsx

import { useLeveling } from "../../context/LevelingContext";

export default function LevelProgressCard() {
  const { xp, level } = useLeveling();

  const xpRequired = Math.floor(50 * Math.pow(level, 1.4));
  const progress = Math.min((xp / xpRequired) * 100, 100);

  return (
    <div className="p-4 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20">
      <h3 className="font-bold text-lg mb-2">Nivel {level}</h3>

      <div className="w-full h-3 bg-black/30 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-500 transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="text-sm mt-2">
        {xp} / {xpRequired} XP
      </p>
    </div>
  );
}
