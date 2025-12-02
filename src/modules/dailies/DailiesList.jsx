import React from "react";
import { useDailiesStore } from "./useDailiesStore";
import DailyItem from "./DailyItem";

export default function DailiesList() {
  const dailies = useDailiesStore((s) => s.dailies);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Diarias</h2>
      {dailies.map((d) => (
        <DailyItem key={d.id} daily={d} />
      ))}
    </div>
  );
}
