// src/pages/missions/WeeklyMissions.jsx

import React from "react";
import useLeveling from "../../hooks/useLeveling";

export default function WeeklyMissions() {
  const { xp, level, addXP } = useLeveling();

  // ... tu lógica de misiones semanales ...

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Weekly Missions</h2>
      <p>Level: {level}</p>
      <p>XP: {xp}</p>
      {/* ... resto del UI ... */}
    </div>
  );
}
