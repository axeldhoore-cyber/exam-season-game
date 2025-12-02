// File: src/components/dashboard/charts/StatsRadar.jsx

import React from "react";
import { Radar } from "react-chartjs-2";
import "chart.js/auto";

export default function StatsRadar({ stats = {} }) {
  const labels = Object.keys(stats);
  const values = Object.values(stats);

  const chartData = {
    labels,
    datasets: [
      {
        label: "Stats",
        data: values,
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="p-6 bg-white dark:bg-neutral-900 rounded-2xl shadow w-full h-full">
      <Radar data={chartData} />
    </div>
  );
}
