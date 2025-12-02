import React from "react";
import { XPLineChart } from "../../Graficas";

export default function XPHistoryCard({ dataPoints }) {
  return (
    <div className="p-6 bg-white dark:bg-neutral-900 rounded-2xl shadow w-full h-full">
      <XPLineChart dataPoints={dataPoints} />
    </div>
  );
}
