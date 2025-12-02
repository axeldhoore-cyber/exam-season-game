import { useState } from "react";

export default function useAttributes() {
  const [stats, setStats] = useState({
    focus: 10,
    stamina: 10,
    flow: 10,
    discipline: 10,
    willpower: 10
  });

  function increase(stat) {
    setStats((prev) => ({ ...prev, [stat]: prev[stat] + 1 }));
  }

  return { stats, increase };
}
