import { createContext, useContext } from "react";
import useAchievements from "../hooks/useAchievements";

const AchievementsContext = createContext();

export function AchievementsProvider({ children }) {
  const achievements = useAchievements();

  return (
    <AchievementsContext.Provider value={achievements}>
      {children}
    </AchievementsContext.Provider>
  );
}

export function useAchievementsContext() {
  return useContext(AchievementsContext);
}
