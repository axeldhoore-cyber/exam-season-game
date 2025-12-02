// File: src/components/dashboard/charts/LevelBarChart.jsx

import React from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

export default function LevelBarChart({ levels = [] }) {
  const chartData = {
    labels: levels.map((_, i) => "Lvl " + (i + 1)),
    datasets: [
      {
        label: "Level Progress",
        data: levels,
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="p-6 bg-white dark:bg-neutral-900 rounded-2xl shadow w-full h-full">
      <Bar data={chartData} />
    </div>
  );
}
