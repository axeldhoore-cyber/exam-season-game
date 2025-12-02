// File: src/components/Dailies/DailyItem.jsx
import React from "react";

export default function DailyItem({ daily, onToggle }) {
  return (
    <div
      onClick={() => onToggle(daily.id)}
      className={`p-4 rounded-xl border cursor-pointer transition ${
        daily.done ? "bg-green-200 border-green-400" : "bg-white border-gray-300"
      }`}
    >
      <div className="flex justify-between items-center">
        <span className="text-lg font-semibold">{daily.title}</span>
        <span className="text-sm font-bold">{daily.xp} XP</span>
      </div>
    </div>
  );
}
