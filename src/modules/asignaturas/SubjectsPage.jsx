// File: src/modules/asignaturas/SubjectsPage.jsx
import React, { useState } from "react";
import { useSubjectsStore } from "./useSubjectsStore";
import SubjectCard from "./SubjectCard";

export default function SubjectsPage() {
  const { subjects, addSubject, removeSubject } = useSubjectsStore();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleAdd = () => {
    if (!name) return;
    addSubject({ name, description });
    setName("");
    setDescription("");
  };

  return (
    <div className="w-full max-w-xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold">Asignaturas</h1>

      <div className="space-y-2">
        <input
          className="w-full p-2 rounded-lg bg-neutral-800"
          placeholder="Nombre de la asignatura"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          className="w-full p-2 rounded-lg bg-neutral-800"
          placeholder="Descripción (opcional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          onClick={handleAdd}
          className="w-full p-2 bg-blue-600 rounded-lg"
        >
          Añadir
        </button>
      </div>

      <div className="space-y-3">
        {subjects.map((s) => (
          <SubjectCard key={s.id} subject={s} onRemove={removeSubject} />
        ))}
      </div>
    </div>
  );
}
