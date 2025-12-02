import { useLevelingContext } from "../../context/LevelingContext";

export default function LevelUpModal() {
  const { showLevelUp, closeLevelUp, level } = useLevelingContext();

  if (!showLevelUp) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-white p-10 rounded shadow-xl text-center">
        <h1 className="text-4xl font-bold mb-4">¡Nivel {level}!</h1>
        <p className="mb-6">Has subido de nivel 🎉</p>
        <button
          className="px-6 py-2 bg-blue-600 text-white rounded"
          onClick={closeLevelUp}
        >
          Cerrar
        </button>
      </div>
    </div>
  );
}
