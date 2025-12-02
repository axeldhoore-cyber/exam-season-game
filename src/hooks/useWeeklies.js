// File: src/hooks/useWeeklies.js
import { useState, useEffect } from "react";
import weekliesData from "../data/weeklies.json";

export default function useWeeklies() {
  const [weeklies, setWeeklies] = useState([]);

  useEffect(() => {
    setWeeklies(weekliesData);
  }, []);

  const toggleWeekly = (id) => {
    setWeeklies((prev) =>
      prev.map((w) =>
        w.id === id ? { ...w, completed: !w.completed } : w
      )
    );
  };

  return {
    weeklies,
    toggleWeekly
  };
}
