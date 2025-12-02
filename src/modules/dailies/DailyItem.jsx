import React from "react";
import { useDailiesStore } from "./useDailiesStore";

export default function DailyItem({ daily }) {
  const toggleDaily = useDailiesStore((s) => s.toggleDaily);

  return (
    <div
      className={`p-3 rounded-xl border mb-2 cursor-pointer ${
        daily.completed ? "bg-green-200 border-green-400" : "bg-white"
      }`}
      onClick={() => toggleDaily(daily.id)}
    >
      <p className="text-lg font-semibold">{daily.title}</p>
      <p className="text-sm opacity-60">{daily.description}</p>
    </div>
  );
}
