import React from "react";

export default function SectionTitle({ title, className = "" }) {
  return (
    <h2
      className={`text-xl font-bold tracking-tight mb-4 dark:text-white ${className}`}
    >
      {title}
    </h2>
  );
}
