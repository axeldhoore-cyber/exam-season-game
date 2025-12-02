// File: src/pages/missions/DailyMissions.jsx

import { useLeveling } from "../../context/LevelingContext";
import { useSupabase } from "../../supabase/SupabaseProvider";

export default function DailyMissions() {
  const { addXP } = useLeveling();
  const { setGameState } = useSupabase();

  const completeMission = (xpReward = 20) => {
    setGameState("completed");
    addXP(xpReward);

    // Trigger evento global
    window.dispatchEvent(new Event("MISSION_COMPLETED"));
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Misiones Diarias</h1>

      <button
        className="mt-4 p-3 bg-blue-600 text-white rounded-lg"
        onClick={() => completeMission(20)}
      >
        Completar Misión (+20 XP)
      </button>
    </div>
  );
}
