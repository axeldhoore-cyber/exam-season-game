// File: src/modules/map/MapGrid.jsx
import React from "react";

export default function MapGrid({ regions, onSelect }) {
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {regions.map((r) => (
        <button
          key={r.id}
          onClick={() => onSelect(r)}
          className="p-6 bg-neutral-800 rounded-xl text-white hover:bg-neutral-700 transition"
        >
          <div className="text-xl font-bold">{r.name}</div>
          <div className="text-sm opacity-70">{r.progress}%</div>
        </button>
      ))}
    </div>
  );
}
