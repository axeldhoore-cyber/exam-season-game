import React from "react";

export default function CycleCard({ cycle }) {
  return (
    <div className="p-6 bg-white dark:bg-neutral-900 rounded-2xl shadow">
      <h3 className="text-lg font-semibold">Ciclo Actual</h3>
      <p className="text-2xl font-bold mt-2">{cycle}</p>
    </div>
  );
}
