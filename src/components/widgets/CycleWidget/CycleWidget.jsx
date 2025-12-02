// File: src/components/widgets/CycleWidget/CycleWidget.jsx
import { useState } from "react";

export default function CycleWidget() {
  const [cycles, setCycles] = useState(0);

  return (
    <div className="w-full p-4 bg-white dark:bg-neutral-900 rounded-xl shadow flex flex-col gap-3">
      <h2 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
        Ciclos Completados
      </h2>

      <div className="text-4xl font-black text-green-600 dark:text-green-500 text-center">
        {cycles}
      </div>

      <div className="flex gap-3">
        <button
          onClick={() => setCycles((c) => c + 1)}
          className="flex-1 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg"
        >
          +1 Ciclo
        </button>

        <button
          onClick={() => setCycles(0)}
          className="flex-1 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
