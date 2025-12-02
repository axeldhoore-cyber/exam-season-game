import { createContext, useContext, useState } from "react";
import { useSupabase } from "../supabase/SupabaseProvider";

const AchievementsContext = createContext();

export function AchievementsProvider({ children }) {
  const [achievements, setAchievements] = useState([]);
  const { supabase, session } = useSupabase();

  const unlockAchievement = (achievementId) => {
    if (!achievements.includes(achievementId)) {
      setAchievements((prev) => [...prev, achievementId]);
    }
  };

  async function unlockAchievementDB(code) {
    if (!session) return;

    const { data, error } = await supabase
      .from("achievements")
      .insert([{ user_id: session.user.id, code }]);

    if (!error) {
      setAchievements((prev) => [...prev, data[0]]);
    }
  }

  return (
    <AchievementsContext.Provider
      value={{ achievements, unlockAchievement, unlockAchievementDB }}
    >
      {children}
    </AchievementsContext.Provider>
  );
}

export const useAchievements = () => useContext(AchievementsContext);
