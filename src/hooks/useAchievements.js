import { useState, useEffect } from "react";
import { useSupabase } from "../supabase/SupabaseProvider";

export default function useAchievements() {
  const { supabase, session } = useSupabase();
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    if (!session) return;

    async function load() {
      const { data } = await supabase
        .from("achievements")
        .select("*")
        .eq("user_id", session.user.id);

      setAchievements(data || []);
    }

    load();
  }, [session, supabase]);

  async function unlockAchievement(code) {
    if (!session) return;

    const { data, error } = await supabase
      .from("achievements")
      .insert([
        {
          user_id: session.user.id,
          code,
        },
      ]);

    if (!error) {
      setAchievements((prev) => [...prev, data[0]]);
    }
  }

  return {
    achievements,
    unlockAchievement,
  };
}
