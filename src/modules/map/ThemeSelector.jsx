// File: src/modules/map/ThemeSelector.jsx
import React from "react";

export default function ThemeSelector({ themes, selected, onChange }) {
  return (
    <div className="flex gap-3 p-4">
      {themes.map((t) => (
        <button
          key={t.id}
          onClick={() => onChange(t.id)}
          className={`px-4 py-2 rounded-lg ${
            selected === t.id ? "bg-blue-600 text-white" : "bg-neutral-700 text-white"
          }`}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}
