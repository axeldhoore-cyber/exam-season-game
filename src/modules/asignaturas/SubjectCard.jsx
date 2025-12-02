import React from "react";

export default function SubjectCard({ subject, onRemove }) {
  return (
    <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-700 flex justify-between items-center">
      <div>
        <h3 className="font-bold text-lg">{subject.name}</h3>
        <p className="text-sm opacity-70">{subject.description}</p>
      </div>
      <button
        onClick={() => onRemove(subject.id)}
        className="px-3 py-1 bg-red-600 rounded-lg"
      >
        X
      </button>
    </div>
  );
}
