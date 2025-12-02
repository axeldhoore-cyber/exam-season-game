// File: src/components/Sidebar.jsx

import { NavLink } from "react-router-dom";
import {
  Home,
  Calendar,
  BookOpen,
  Map,
  BarChart2,
  Award,
  Sword,
  Settings,
} from "lucide-react";

export default function Sidebar() {
  const links = [
    { to: "/dashboard", label: "Dashboard", icon: <Home size={20} /> },
    { to: "/missions/daily", label: "Diarias", icon: <Calendar size={20} /> },
    { to: "/missions/weekly", label: "Semanales", icon: <Calendar size={20} /> },
    { to: "/missions/subjects", label: "Asignaturas", icon: <BookOpen size={20} /> },
    { to: "/map", label: "Mapa", icon: <Map size={20} /> },
    { to: "/progression/stats", label: "Gráficas", icon: <BarChart2 size={20} /> },
    { to: "/achievements", label: "Logros", icon: <Award size={20} /> },
    { to: "/challenges", label: "Retos", icon: <Sword size={20} /> },
    { to: "/settings", label: "Ajustes", icon: <Settings size={20} /> },
  ];

  return (
    <aside className="fixed left-0 top-0 h-full w-60 bg-[#0c0c0c] border-r border-neutral-800 p-5 flex flex-col gap-3">
      <h1 className="text-xl font-bold text-white mb-6">Exam Season</h1>

      <nav className="flex flex-col gap-2">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                isActive
                  ? "bg-neutral-800 text-white"
                  : "text-neutral-300 hover:bg-neutral-800"
              }`
            }
          >
            {link.icon}
            {link.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
