// File: src/router.jsx

import { Routes, Route } from "react-router-dom";

// AUTH
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import SpecialLogin from "./pages/auth/SpecialLogin";

// DASHBOARD
import Dashboard from "./pages/dashboard/Dashboard";

// MISSIONS
import DailyMissions from "./pages/missions/DailyMissions";
import WeeklyMissions from "./pages/missions/WeeklyMissions";
import StudySubjects from "./pages/missions/StudySubjects";

// MAP
import WorldMap from "./pages/map/WorldMap";
import RegionView from "./pages/map/RegionView";
import MissionView from "./pages/map/MissionView";

// PROGRESSION
import AttributesPage from "./pages/progression/AttributesPage";
import ProgressionCurve from "./pages/progression/ProgressionCurve";
import StatsGraphs from "./pages/progression/StatsGraphs";

export default function Router() {
  return (
    <Routes>
      {/* AUTH */}
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/special" element={<SpecialLogin />} />

      {/* DASHBOARD */}
      <Route path="/dashboard" element={<Dashboard />} />

      {/* MISSIONS */}
      <Route path="/missions/daily" element={<DailyMissions />} />
      <Route path="/missions/weekly" element={<WeeklyMissions />} />
      <Route path="/missions/subjects" element={<StudySubjects />} />

      {/* MAP */}
      <Route path="/map" element={<WorldMap />} />
      <Route path="/map/region/:id" element={<RegionView />} />
      <Route path="/map/mission/:id" element={<MissionView />} />

      {/* PROGRESSION */}
      <Route path="/progression/attributes" element={<AttributesPage />} />
      <Route path="/progression/curve" element={<ProgressionCurve />} />
      <Route path="/progression/stats" element={<StatsGraphs />} />
    </Routes>
  );
}
