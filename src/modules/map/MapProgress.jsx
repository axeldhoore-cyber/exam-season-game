// File: src/modules/map/MapProgress.jsx
import React from "react";

export default function MapProgress({ total, completed }) {
  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <div className="w-full p-4">
      <div className="text-white mb-2">{percent}% completado</div>
      <div className="w-full h-3 bg-neutral-700 rounded-full">
        <div
          className="h-full bg-green-500 rounded-full transition-all"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
}
