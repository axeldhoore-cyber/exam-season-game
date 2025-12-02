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
