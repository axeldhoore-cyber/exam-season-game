import { useState, useEffect, useCallback } from "react";
import { useSupabase } from "../supabase/SupabaseProvider";

// --- XP Curve Elite (C)
// Crecimiento muy exigente → niveles altos requieren MUCHÍSIMO XP
const getRequiredXP = (level) => {
  // Fórmula ELITE: exponencial estable + boost progresivo
  return Math.floor(60 * Math.pow(level, 1.55) + level * 12);
};

export default function useLeveling() {
  const { supabase, user } = useSupabase();

  const [xp, setXP] = useState(0);
  const [level, setLevel] = useState(1);
  const [loading, setLoading] = useState(true);
  const [pendingXP, setPendingXP] = useState(0); // Para transiciones suaves
  const [levelingUp, setLevelingUp] = useState(false);

  // --- Load progression from Supabase
  const loadProgress = useCallback(async () => {
    if (!user) return;

    const { data, error } = await supabase
      .from("profiles")
      .select("xp, level")
      .eq("id", user.id)
      .single();

    if (!error && data) {
      setXP(data.xp ?? 0);
      setLevel(data.level ?? 1);
    }

    setLoading(false);
  }, [supabase, user]);

  // --- Save to Supabase
  const saveProgress = useCallback(
    async (newXP, newLevel) => {
      if (!user) return;

      await supabase
        .from("profiles")
        .update({
          xp: newXP,
          level: newLevel,
        })
        .eq("id", user.id);
    },
    [supabase, user]
  );

  useEffect(() => {
    loadProgress();
  }, [loadProgress]);

  // --- Add XP with pipeline professional
  const addXP = async (amount) => {
    if (loading || !user) return;

    let newXP = xp + amount;
    let newLevel = level;
    let required = getRequiredXP(level);

    // Triggers múltiples de nivel por salto grande
    let leveledUp = false;

    while (newXP >= required) {
      newXP -= required;
      newLevel += 1;
      required = getRequiredXP(newLevel);
      leveledUp = true;
    }

    setXP(newXP);
    setLevel(newLevel);
    setPendingXP(amount); // Trigger animaciones UI

    if (leveledUp) {
      setLevelingUp(true); // abrir modal más adelante
    }

    await saveProgress(newXP, newLevel);
  };

  // --- Reset pending animation state
  const clearPending = () => setPendingXP(0);
  const closeLevelUp = () => setLevelingUp(false);

  return {
    xp,
    level,
    addXP,
    pendingXP,
    clearPending,
    levelingUp,
    closeLevelUp,
    getRequiredXP,
    loading,
  };
}
