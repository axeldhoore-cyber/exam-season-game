// File: src/components/widgets/AttributesWidget.jsx
import { useEffect, useState } from "react";

export default function AttributesWidget() {
  const [attributes, setAttributes] = useState({
    focus: 0,
    stamina: 0,
    flow: 0,
    discipline: 0,
    willpower: 0,
  });

  useEffect(() => {
    const saved = localStorage.getItem("attributes");
    if (saved) setAttributes(JSON.parse(saved));
  }, []);

  const update = (key, delta) => {
    const updated = { ...attributes, [key]: attributes[key] + delta };
    setAttributes(updated);
    localStorage.setItem("attributes", JSON.stringify(updated));
  };

  return (
    <div className="w-full p-4 bg-white dark:bg-neutral-900 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-4 dark:text-white">Atributos</h2>
      {Object.entries(attributes).map(([key, value]) => (
        <div key={key} className="flex items-center justify-between mb-3">
          <span className="capitalize dark:text-white">{key}</span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => update(key, -1)}
              className="px-2 py-1 bg-red-500 text-white rounded"
            >
              -
            </button>
            <span className="w-10 text-center dark:text-white">{value}</span>
            <button
              onClick={() => update(key, 1)}
              className="px-2 py-1 bg-green-500 text-white rounded"
            >
              +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
