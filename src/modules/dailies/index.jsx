import React from "react";
import AddDaily from "./AddDaily";
import DailiesList from "./DailiesList";

export default function DailiesModule() {
  return (
    <div className="max-w-xl mx-auto">
      <AddDaily />
      <DailiesList />
    </div>
  );
}
