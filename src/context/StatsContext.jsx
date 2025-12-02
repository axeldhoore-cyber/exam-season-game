import { createContext, useContext, useEffect } from "react";
import useStats from "../hooks/useStats";

const StatsContext = createContext();

export function StatsProvider({ children }) {
  const stats = useStats();

  return (
    <StatsContext.Provider value={stats}>
      {children}
    </StatsContext.Provider>
  );
}

export function useStatsContext() {
  return useContext(StatsContext);
}
