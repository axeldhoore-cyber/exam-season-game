import React from "react";

export default function DailyProgressCard({ current, goal }) {
  return (
    <div className="p-6 bg-white dark:bg-neutral-900 rounded-2xl shadow">
      <p className="text-lg font-semibold">Progreso Diario</p>
      <p className="text-3xl font-bold mt-2">{current} / {goal}</p>
    </div>
  );
}
