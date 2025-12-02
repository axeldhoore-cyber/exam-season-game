// File: src/layouts/MainLayout.jsx

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="flex">

      {/* SIDEBAR */}
      <Sidebar />

      {/* CONTENIDO PRINCIPAL */}
      <div className="flex-1 ml-60">

        {/* NAVBAR */}
        <Navbar />

        {/* CONTENIDO DE LA PÁGINA */}
        <main className="main-content">
          <Outlet />
        </main>
        
      </div>
    </div>
  );
}
