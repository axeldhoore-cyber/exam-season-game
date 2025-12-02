import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

// PROVIDERS
import { SupabaseProvider } from "./supabase/SupabaseProvider";
import { LevelingProvider } from "./context/LevelingContext";
import { ModalProvider } from "./context/ModalContext";
import { AchievementsProvider } from "./context/AchievementsContext";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <SupabaseProvider>
        <LevelingProvider>
          <ModalProvider>
            <AchievementsProvider>
              <App />
            </AchievementsProvider>
          </ModalProvider>
        </LevelingProvider>
      </SupabaseProvider>
    </BrowserRouter>
  </React.StrictMode>
);
