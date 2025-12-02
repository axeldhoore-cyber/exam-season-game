// File: src/context/LevelingContext.jsx

import { createContext, useContext, useState, useEffect } from "react";
import { useSupabase } from "../supabase/SupabaseProvider";

const LevelingContext = createContext();

export function LevelingProvider({ children }) {
  const { supabase, user } = useSupabase();

  const [xp, setXP] = useState(0);
  const [level, setLevel] = useState(1);
  const [unspentAttributes, setUnspentAttributes] = useState(0);

  // XP Curve Engine (curva profesional)
  const getLevelFromXP = (totalXP) => {
    let level = 1;
    let required = 50;

    while (totalXP >= required) {
      level++;
      required = Math.floor(50 * Math.pow(level, 1.4));
    }

    return level;
  };

  // Add XP + Level-Up Pipeline
  const addXP = async (amount) => {
    const newXP = xp + amount;
    const newLevel = getLevelFromXP(newXP);

    setXP(newXP);

    // LEVEL-UP PIPELINE
    if (newLevel > level) {
      setLevel(newLevel);
      setUnspentAttributes((prev) => prev + 1);

      // Trigger evento de subida de nivel
      window.dispatchEvent(new Event("LEVEL_UP"));
    }

    if (user) {
      await supabase
        .from("profiles")
        .update({
          xp: newXP,
          level: newLevel,
          unspent_attributes: unspentAttributes,
        })
        .eq("id", user.id);
    }
  };

  // Event listeners globales del Core
  useEffect(() => {
    const onLevelUp = () => {
      console.log("🔥 EVENT: LEVEL UP");
    };

    const onMission = () => {
      console.log("⚡ EVENT: MISSION COMPLETED");
    };

    window.addEventListener("LEVEL_UP", onLevelUp);
    window.addEventListener("MISSION_COMPLETED", onMission);

    return () => {
      window.removeEventListener("LEVEL_UP", onLevelUp);
      window.removeEventListener("MISSION_COMPLETED", onMission);
    };
  }, []);

  return (
    <LevelingContext.Provider
      value={{
        xp,
        level,
        addXP,
        unspentAttributes,
        setUnspentAttributes,
      }}
    >
      {children}
    </LevelingContext.Provider>
  );
}

export const useLeveling = () => useContext(LevelingContext);
