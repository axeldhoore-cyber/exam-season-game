import React, { useState } from "react";
import { useDailiesStore } from "./useDailiesStore";

export default function AddDaily() {
  const addDaily = useDailiesStore((s) => s.addDaily);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submit = () => {
    if (!title.trim()) return;
    addDaily({
      id: crypto.randomUUID(),
      title,
      description,
      completed: false,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="p-4 border rounded-xl mb-4">
      <input
        className="w-full p-2 mb-2 border rounded"
        placeholder="Título diaria"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="w-full p-2 mb-2 border rounded"
        placeholder="Descripción"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        onClick={submit}
        className="w-full bg-black text-white py-2 rounded-xl"
      >
        Añadir diaria
      </button>
    </div>
  );
}
