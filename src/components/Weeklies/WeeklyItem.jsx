// File: src/components/Weeklies/WeeklyItem.jsx
import React from "react";

export default function WeeklyItem({ weekly, toggleWeekly }) {
  return (
    <div
      className={`p-4 rounded-xl border mb-3 flex justify-between items-center ${
        weekly.completed ? "bg-green-200 border-green-400" : "bg-white border-gray-300"
      }`}
    >
      <div>
        <h3 className="font-bold text-lg">{weekly.title}</h3>
        <p className="text-sm text-gray-600">{weekly.description}</p>
        <p className="text-xs mt-1">XP: {weekly.xp}</p>
      </div>

      <button
        className={`px-3 py-1 rounded-lg ${
          weekly.completed ? "bg-red-500 text-white" : "bg-blue-500 text-white"
        }`}
        onClick={() => toggleWeekly(weekly.id)}
      >
        {weekly.completed ? "Desmarcar" : "Completar"}
      </button>
    </div>
  );
}
