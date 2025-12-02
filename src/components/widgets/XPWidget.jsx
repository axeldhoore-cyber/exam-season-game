// File: src/components/widgets/XPWidget.jsx
import { useEffect, useState } from "react";

export default function XPWidget() {
  const [xp, setXp] = useState(0);

  useEffect(() => {
    const stored = localStorage.getItem("xp") || 0;
    setXp(parseInt(stored));
  }, []);

  return (
    <div className="w-full bg-neutral-900 border border-neutral-700 rounded-xl p-4 text-white">
      <h2 className="text-xl font-bold mb-2">XP</h2>
      <p className="text-4xl font-black">{xp}</p>
    </div>
  );
}
