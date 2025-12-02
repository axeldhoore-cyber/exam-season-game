// File: src/components/dashboard/widgets/LevelProgressCard.jsx
import useLeveling from "../../../hooks/useLeveling";

export default function LevelProgressCard() {
  const { xp, level } = useLeveling();

  const nextXP = Math.floor(50 * Math.pow(level, 1.4));
  const pct = Math.min(100, (xp / nextXP) * 100);

  return (
    <div className="p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10">
      <h3 className="text-white/80 mb-2 font-semibold">Nivel {level}</h3>
      <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-purple-500/60 transition-all duration-500 rounded-full"
          style={{ width: pct + "%" }}
        />
      </div>
      <p className="text-white/50 text-sm mt-2">{xp} / {nextXP} XP</p>
    </div>
  );
}
