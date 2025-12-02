// File: src/context/LevelingContext.jsx
import { createContext, useState, useEffect } from "react";
import { useSupabase } from "../supabase/SupabaseProvider";

export const LevelingContext = createContext();

export function LevelingProvider({ children }) {
  const { supabase, user } = useSupabase();

  const [xp, setXP] = useState(0);
  const [level, setLevel] = useState(1);
  const [unspentAttributes, setUnspentAttributes] = useState(0);

  const xpRequired = (lvl) => Math.floor(50 * Math.pow(lvl, 1.4));

  const getLevelFromXP = (totalXP) => {
    let lvl = 1;
    while (totalXP >= xpRequired(lvl)) {
      totalXP -= xpRequired(lvl);
      lvl++;
    }
    return lvl;
  };

  const loadUserXP = async () => {
    if (!user) return;

    const { data } = await supabase
      .from("profiles")
      .select("xp, level, unspent_attributes")
      .eq("id", user.id)
      .single();

    if (data) {
      setXP(data.xp || 0);
      setLevel(data.level || 1);
      setUnspentAttributes(data.unspent_attributes || 0);
    }
  };

  const persist = async (newXP, newLevel, newUnspent) => {
    if (!user) return;

    await supabase
      .from("profiles")
      .update({
        xp: newXP,
        level: newLevel,
        unspent_attributes: newUnspent
      })
      .eq("id", user.id);
  };

  const addXP = async (amount) => {
    const newXP = xp + amount;
    const newLevel = getLevelFromXP(newXP);
    const levelUp = newLevel > level;
    const newUnspent = levelUp ? unspentAttributes + 1 : unspentAttributes;

    setXP(newXP);
    setLevel(newLevel);
    setUnspentAttributes(newUnspent);
    await persist(newXP, newLevel, newUnspent);

    return { levelUp, old: level, new: newLevel };
  };

  const checkLevelUp = () => {
    const newLevel = getLevelFromXP(xp);
    if (newLevel > level) {
      const newUnspent = unspentAttributes + 1;
      setLevel(newLevel);
      setUnspentAttributes(newUnspent);
      persist(xp, newLevel, newUnspent);
      return { levelUp: true, old: level, new: newLevel };
    }
    return { levelUp: false };
  };

  useEffect(() => {
    loadUserXP();
  }, [user]);

  return (
    <LevelingContext.Provider
      value={{
        xp,
        level,
        unspentAttributes,
        addXP,
        checkLevelUp,
        setXP,
        setLevel,
        setUnspentAttributes,
      }}
    >
      {children}
    </LevelingContext.Provider>
  );
}
