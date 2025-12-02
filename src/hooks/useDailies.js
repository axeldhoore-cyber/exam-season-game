// File: src/hooks/useDailies.js
import { useEffect, useState } from "react";
import dailiesData from "../data/dailies.json";

export const useDailies = () => {
  const [dailies, setDailies] = useState([]);

  useEffect(() => {
    setDailies(dailiesData.dailies);
  }, []);

  const toggleDaily = (id) => {
    setDailies((prev) =>
      prev.map((d) =>
        d.id === id ? { ...d, done: !d.done } : d
      )
    );
  };

  const resetDailies = () => {
    setDailies(dailiesData.dailies.map((d) => ({ ...d, done: false })));
  };

  return { dailies, toggleDaily, resetDailies };
};
