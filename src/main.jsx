// File: src/main.jsx

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// CONTEXTOS
import { SupabaseProvider } from "./supabase/SupabaseProvider";
import { LevelingProvider } from "./context/LevelingContext";
import { AchievementsProvider } from "./context/AchievementsContext";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SupabaseProvider>
      <LevelingProvider>
        <AchievementsProvider>
          <App />
        </AchievementsProvider>
      </LevelingProvider>
    </SupabaseProvider>
  </React.StrictMode>
);
