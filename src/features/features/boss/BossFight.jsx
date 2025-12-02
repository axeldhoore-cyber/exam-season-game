// File: src/features/boss/BossFight.jsx
import { useState } from "react";

export default function BossFight() {
  const [hp, setHp] = useState(100);
  const [playerHp, setPlayerHp] = useState(100);
  const [log, setLog] = useState([]);

  const attack = () => {
    const dmg = Math.floor(Math.random() * 15) + 5;
    const bossDmg = Math.floor(Math.random() * 10) + 3;

    setHp(prev => Math.max(0, prev - dmg));
    setPlayerHp(prev => Math.max(0, prev - bossDmg));

    setLog(prev => [
      `Hiciste ${dmg} de daño | El boss te hizo ${bossDmg}`,
      ...prev
    ]);
  };

  const reset = () => {
    setHp(100);
    setPlayerHp(100);
    setLog([]);
  };

  return (
    <div className="flex flex-col gap-4 p-6 max-w-md mx-auto text-white">
      <div className="bg-gray-900 p-4 rounded-xl">
        <h2 className="text-xl font-bold mb-2">Boss Fight</h2>

        <div className="mb-4">
          <p>🔥 Boss HP: {hp}</p>
          <div className="w-full bg-gray-700 h-3 rounded">
            <div
              className="bg-red-500 h-3 rounded"
              style={{ width: `${hp}%` }}
            ></div>
          </div>
        </div>

        <div className="mb-4">
          <p>🧍 Player HP: {playerHp}</p>
          <div className="w-full bg-gray-700 h-3 rounded">
            <div
              className="bg-green-500 h-3 rounded"
              style={{ width: `${playerHp}%` }}
            ></div>
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={attack}
            className="bg-blue-600 px-4 py-2 rounded-lg"
          >
            Atacar
          </button>
          <button
            onClick={reset}
            className="bg-gray-600 px-4 py-2 rounded-lg"
          >
            Reset
          </button>
        </div>
      </div>

      <div className="bg-gray-800 p-4 rounded-xl h-48 overflow-y-auto">
        <h3 className="font-bold mb-2">Log</h3>
        <ul className="text-sm flex flex-col gap-1">
          {log.map((l, i) => (
            <li key={i}>{l}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
