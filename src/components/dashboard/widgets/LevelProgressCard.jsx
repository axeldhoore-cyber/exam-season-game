import React from "react";
import { LevelBarChart } from "../../Graficas";

export default function LevelProgressCard({ levels }) {
  return (
    <div className="p-6 bg-white dark:bg-neutral-900 rounded-2xl shadow w-full h-full">
      <LevelBarChart levels={levels} />
    </div>
  );
}
