// File: src/main.jsx

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { SupabaseProvider } from "./supabase/SupabaseProvider";
import { LevelingProvider } from "./context/LevelingContext";
import { AchievementsProvider } from "./context/AchievementsContext";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <SupabaseProvider>
    <LevelingProvider>
      <AchievementsProvider>
        <App />
      </AchievementsProvider>
    </LevelingProvider>
  </SupabaseProvider>
);
