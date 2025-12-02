// File: src/supabase/SupabaseProvider.jsx

import { createContext, useContext, useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

const SupabaseContext = createContext();

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export function SupabaseProvider({ children }) {
  const [user, setUser] = useState(null);

  // Core Additions
  const [gameState, setGameState] = useState("loading"); // loading | idle | in_mission | completed | level_up
  const [dailyStreak, setDailyStreak] = useState(0);
  const [weeklyStreak, setWeeklyStreak] = useState(0);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data?.user || null);
      setGameState("idle");
    });

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user || null);
        setGameState("idle");
      }
    );

    return () => listener.subscription.unsubscribe();
  }, []);

  return (
    <SupabaseContext.Provider
      value={{
        supabase,
        user,
        gameState,
        setGameState,
        dailyStreak,
        setDailyStreak,
        weeklyStreak,
        setWeeklyStreak,
      }}
    >
      {children}
    </SupabaseContext.Provider>
  );
}

export const useSupabase = () => useContext(SupabaseContext);
