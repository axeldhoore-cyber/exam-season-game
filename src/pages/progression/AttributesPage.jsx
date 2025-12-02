import { useState } from "react";
import useLeveling from "../../hooks/useLeveling";

export default function AttributesPage() {
  const { unspentAttributes, setUnspentAttributes } = useLeveling();

  const [stats, setStats] = useState({
    STR: 0,
    FOC: 0,
    STA: 0,
    INT: 0,
  });

  const assign = (stat) => {
    if (unspentAttributes <= 0) return;

    setStats((prev) => ({
      ...prev,
      [stat]: prev[stat] + 1,
    }));

    setUnspentAttributes((prev) => prev - 1);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Atributos</h1>

      <p className="opacity-80 mb-4">
        Puntos disponibles: {unspentAttributes}
      </p>

      <div className="grid grid-cols-2 gap-4">
        {Object.keys(stats).map((stat) => (
          <div
            key={stat}
            className="p-4 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 text-center"
          >
            <h3 className="text-xl font-bold">{stat}</h3>
            <p className="text-2xl">{stats[stat]}</p>

            <button
              onClick={() => assign(stat)}
              className="mt-2 bg-purple-600 hover:bg-purple-700 transition px-4 py-2 rounded-lg"
            >
              + Asignar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
