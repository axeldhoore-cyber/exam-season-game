// File: src/components/Counter/CounterControls.jsx
import { useState } from "react";

export default function CounterControls({ onPauseToggle }) {
  const [paused, setPaused] = useState(false);

  const handleClick = () => {
    const newPaused = !paused;
    setPaused(newPaused);
    onPauseToggle(newPaused);
  };

  return (
    <button
      onClick={handleClick}
      className="px-4 py-2 bg-blue-600 text-white rounded-md w-full"
    >
      {paused ? "Reanudar" : "Pausar"}
    </button>
  );
}
