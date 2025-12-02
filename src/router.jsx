// File: src/router.jsx

import { createBrowserRouter } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import SpecialLogin from "./pages/auth/SpecialLogin";

import Dashboard from "./pages/dashboard/Dashboard";

import DailyMissions from "./pages/missions/DailyMissions";
import WeeklyMissions from "./pages/missions/WeeklyMissions";
import StudySubjects from "./pages/missions/StudySubjects";

import WorldMap from "./pages/map/WorldMap";
import RegionView from "./pages/map/RegionView";
import MissionView from "./pages/map/MissionView";

import AttributesPage from "./pages/progression/AttributesPage";
import ProgressionCurve from "./pages/progression/ProgressionCurve";
import StatsGraphs from "./pages/progression/StatsGraphs";

import PVP from "./pages/challenges/PVP";
import AchievementsPage from "./pages/achievements/AchievementsPage";

import ProtectedRoute from "./components/ProtectedRoute";

const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/special-login", element: <SpecialLogin /> },

  {
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),

    children: [
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/missions/daily", element: <DailyMissions /> },
      { path: "/missions/weekly", element: <WeeklyMissions /> },
      { path: "/missions/subjects", element: <StudySubjects /> },

      { path: "/map", element: <WorldMap /> },
      { path: "/map/region/:regionId", element: <RegionView /> },
      { path: "/map/mission/:missionId", element: <MissionView /> },

      { path: "/progression/attributes", element: <AttributesPage /> },
      { path: "/progression/curve", element: <ProgressionCurve /> },
      { path: "/progression/stats", element: <StatsGraphs /> },

      { path: "/challenges", element: <PVP /> },
      { path: "/achievements", element: <AchievementsPage /> },
    ],
  },
]);

export default router;
