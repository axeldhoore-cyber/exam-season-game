// File: src/components/Weeklies/WeekliesList.jsx
import React from "react";
import useWeeklies from "../../hooks/useWeeklies";
import WeeklyItem from "./WeeklyItem";

export default function WeekliesList() {
  const { weeklies, toggleWeekly } = useWeeklies();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Semanales</h2>
      {weeklies.map((w) => (
        <WeeklyItem key={w.id} weekly={w} toggleWeekly={toggleWeekly} />
      ))}
    </div>
  );
}
