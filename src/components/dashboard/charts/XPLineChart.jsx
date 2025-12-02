// File: src/components/dashboard/charts/XPLineChart.jsx

import React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

export default function XPLineChart({ dataPoints = [] }) {
  if (!Array.isArray(dataPoints)) dataPoints = [];

  const chartData = {
    labels: dataPoints.map((_, index) => index + 1),
    datasets: [
      {
        label: "XP History",
        data: dataPoints,
        borderWidth: 2,
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="p-6 bg-white dark:bg-neutral-900 rounded-2xl shadow w-full h-full">
      <Line data={chartData} />
    </div>
  );
}
