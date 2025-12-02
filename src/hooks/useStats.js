import { useState, useEffect, useCallback } from "react";
import { useSupabase } from "../supabase/SupabaseProvider";

/*
  ATRIBUTOS DINÁMICOS (Modo E — FULL AUTO)
  ----------------------------------------
  Focus        → constancia diaria
  Flow         → pocas distracciones
  Stamina      → duración total de estudio
  Willpower    → estabilidad del streak
*/

const BASE = 10;

const computeDynamicStats = ({
  dailyMinutes,
  distractions,
  streak,
  consistency,
}) => {
  return {
    Focus: BASE + Math.floor(consistency * 0.7),
    Flow: BASE + Math.max(0, Math.floor((100 - distractions) * 0.15)),
    Stamina: BASE + Math.floor(dailyMinutes / 40),
    Willpower: BASE + Math.floor(streak * 1.4),
  };
};

export default function useStats() {
  const { supabase, user } = useSupabase();

  const [stats, setStats] = useState({
    Focus: BASE,
    Flow: BASE,
    Stamina: BASE,
    Willpower: BASE,
  });

  const [loading, setLoading] = useState(true);

  // Load previous stats
  const loadStats = useCallback(async () => {
    if (!user) return;

    const { data } = await supabase
      .from("profiles")
      .select("focus, flow, stamina, willpower")
      .eq("id", user.id)
      .single();

    if (data) {
      setStats({
        Focus: data.focus ?? BASE,
        Flow: data.flow ?? BASE,
        Stamina: data.stamina ?? BASE,
        Willpower: data.willpower ?? BASE,
      });
    }

    setLoading(false);
  }, [supabase, user]);

  useEffect(() => {
    loadStats();
  }, [loadStats]);

  // Save
  const save = async (newStats) => {
    if (!user) return;
    await supabase
      .from("profiles")
      .update({
        focus: newStats.Focus,
        flow: newStats.Flow,
        stamina: newStats.Stamina,
        willpower: newStats.Willpower,
      })
      .eq("id", user.id);
  };

  // MAIN UPDATE (called by DailyCycle & StudySession systems)
  const updateDynamicStats = async ({
    dailyMinutes,
    distractions,
    streak,
    consistency,
  }) => {
    const newStats = computeDynamicStats({
      dailyMinutes,
      distractions,
      streak,
      consistency,
    });

    setStats(newStats);
    await save(newStats);
  };

  return {
    stats,
    loading,
    updateDynamicStats,
  };
}
