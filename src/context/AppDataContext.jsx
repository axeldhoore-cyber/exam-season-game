import { createContext, useState } from "react";

export const AppDataContext = createContext();

export function AppDataProvider({ children }) {
  const [initialData, setInitialData] = useState({
    username: "",
    email: "",
    level: 1,
    xp: 0,
    dailyGoal: 0,
    streak: 0,
  });

  return (
    <AppDataContext.Provider value={{ initialData, setInitialData }}>
      {children}
    </AppDataContext.Provider>
  );
}
