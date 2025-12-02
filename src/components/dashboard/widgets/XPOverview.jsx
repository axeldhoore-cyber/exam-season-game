// File: src/components/dashboard/widgets/XPOverview.jsx
import React from "react";

export default function XPOverview() {
  return (
    <div className="p-6 bg-white dark:bg-neutral-900 rounded-2xl shadow">
      <h2 className="text-2xl font-bold mb-2">XP Overview</h2>
      <p className="opacity-60">Resumen general de tu progreso.</p>

      <div className="mt-4 text-lg">
        <strong>Total XP:</strong> 3240
      </div>

      <div className="mt-2 text-lg">
        <strong>Nivel:</strong> 12
      </div>
    </div>
  );
}
