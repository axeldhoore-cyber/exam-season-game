// src/pages/missions/DailyMissions.jsx

import React from "react";
import useLeveling from "../../hooks/useLeveling";

export default function DailyMissions() {
  const { xp, level, addXP } = useLeveling();

  const missions = [
    { id: 1, title: "Estudiar 25 min", reward: 10 },
    { id: 2, title: "Estudiar 50 min", reward: 25 },
    { id: 3, title: "Estudiar 2 h", reward: 60 },
  ];

  const completeMission = (reward) => {
    addXP(reward);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Daily Missions</h2>
      <p className="mb-2">Level: {level}</p>
      <p className="mb-4">XP: {xp}</p>

      <div className="flex flex-col gap-4">
        {missions.map((mission) => (
          <div
            key={mission.id}
            className="p-4 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg"
          >
            <p className="text-lg">{mission.title}</p>
            <p className="opacity-80 text-sm">Recompensa: +{mission.reward} XP</p>
            <button
              onClick={() => completeMission(mission.reward)}
              className="mt-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 transition rounded-lg"
            >
              Completar misión
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
