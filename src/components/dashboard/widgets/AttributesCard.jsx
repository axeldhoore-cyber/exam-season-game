// File: src/components/dashboard/widgets/AttributesCard.jsx
import React from "react";

export default function AttributesCard({ attributes = {} }) {
  return (
    <div className="p-6 bg-white dark:bg-neutral-900 rounded-2xl shadow">
      <h2 className="text-2xl font-bold mb-3">Atributos</h2>

      {Object.keys(attributes).length === 0 ? (
        <p className="opacity-60">Sin datos de atributos.</p>
      ) : (
        Object.entries(attributes).map(([key, value]) => (
          <p key={key} className="text-lg">
            <strong>{key}:</strong> {value}
          </p>
        ))
      )}
    </div>
  );
}
