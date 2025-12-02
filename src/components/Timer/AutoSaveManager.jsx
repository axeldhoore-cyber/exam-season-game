// File: src/components/Timer/AutoSaveManager.jsx
import { useState, useCallback } from "react";
import { useAutoSave } from "./useAutoSave";

export default function AutoSaveManager({ initialData = "", onAutoSave }) {
  const [data, setData] = useState(initialData);

  const handleSave = useCallback(
    (current) => {
      if (onAutoSave) onAutoSave(current);
      localStorage.setItem("autosave_timer", JSON.stringify(current));
    },
    [onAutoSave]
  );

  useAutoSave(data, handleSave, 800);

  return (
    <textarea
      value={data}
      onChange={(e) => setData(e.target.value)}
      className="w-full h-40 p-2 bg-neutral-900 text-white rounded"
    />
  );
}
