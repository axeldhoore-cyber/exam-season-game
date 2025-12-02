import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { SupabaseProvider } from "./supabase/SupabaseProvider";
import { LevelingProvider } from "./context/LevelingContext";
import { StatsProvider } from "./context/StatsContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <SupabaseProvider>
        <LevelingProvider>
          <StatsProvider>
            <App />
          </StatsProvider>
        </LevelingProvider>
      </SupabaseProvider>
    </BrowserRouter>
  </React.StrictMode>
);
