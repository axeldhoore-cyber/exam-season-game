import React from "react";

export default function DashboardStatCard({ title, value }) {
  return (
    <div className="p-6 bg-white dark:bg-neutral-900 rounded-2xl shadow text-center">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-3xl font-bold mt-2">{value}</p>
    </div>
  );
}
