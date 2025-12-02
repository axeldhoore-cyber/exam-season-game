// File: src/pages/dashboard/Dashboard.jsx

import { useSupabase } from "../../supabase/SupabaseProvider";
import { useNavigate } from "react-router-dom";

// ICONOS
import { Flame, Zap, Target, Clock } from "lucide-react";

export default function Dashboard() {
  const { supabase, session } = useSupabase();
  const navigate = useNavigate();

  async function logout() {
    await supabase.auth.signOut();
    navigate("/");
  }

  return (
    <div className="w-full min-h-screen p-6 text-white">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-black">Dashboard</h1>
          <p className="opacity-60">Hola, {session?.user?.email}</p>
        </div>

        <button
          onClick={logout}
          className="px-6 py-2 bg-red-600 text-white rounded-lg"
        >
          Cerrar sesión
        </button>
      </div>

      {/* TARJETAS KPI — estilo antiguo */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">

        <div className="bg-[#111111] p-6 rounded-2xl shadow-xl">
          <div className="flex items-center gap-3 mb-2">
            <Flame size={28} className="text-orange-500" />
            <span className="text-lg opacity-70">Ciclos</span>
          </div>
          <p className="text-6xl font-black">3</p>
        </div>

        <div className="bg-[#111111] p-6 rounded-2xl shadow-xl">
          <div className="flex items-center gap-3 mb-2">
            <Zap size={28} className="text-yellow-400" />
            <span className="text-lg opacity-70">XP Hoy</span>
          </div>
          <p className="text-6xl font-black">320</p>
        </div>

        <div className="bg-[#111111] p-6 rounded-2xl shadow-xl">
          <div className="flex items-center gap-3 mb-2">
            <Target size={28} className="text-green-400" />
            <span className="text-lg opacity-70">Misiones</span>
          </div>
          <p className="text-6xl font-black">5</p>
        </div>

        <div className="bg-[#111111] p-6 rounded-2xl shadow-xl">
          <div className="flex items-center gap-3 mb-2">
            <Clock size={28} className="text-blue-400" />
            <span className="text-lg opacity-70">Tiempo activo</span>
          </div>
          <p className="text-6xl font-black">3h 20m</p>
        </div>
      </div>

      {/* TEMPORIZADORES — estilo antiguo */}
      <h2 className="text-2xl font-bold mb-4">Temporizadores</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">

        {/* TEMPORIZADOR 1 */}
        <div className="bg-[#111111] p-6 rounded-2xl shadow-xl flex flex-col items-center">
          <h3 className="text-xl font-bold mb-3">Pomodoro</h3>
          <p className="text-5xl font-black mb-3">25:00</p>
          <button className="px-6 py-2 bg-green-600 rounded-lg">Iniciar</button>
        </div>

        {/* TEMPORIZADOR 2 */}
        <div className="bg-[#111111] p-6 rounded-2xl shadow-xl flex flex-col items-center">
          <h3 className="text-xl font-bold mb-3">Ciclo 3h</h3>
          <p className="text-5xl font-black mb-3">03:00:00</p>
          <button className="px-6 py-2 bg-green-600 rounded-lg">Iniciar</button>
        </div>

      </div>

      {/* ACCESOS RÁPIDOS */}
      <h2 className="text-2xl font-bold mb-4">Accesos rápidos</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

        <button onClick={() => navigate("/missions/daily")} className="dash-btn">
          Diarias
        </button>

        <button onClick={() => navigate("/missions/weekly")} className="dash-btn">
          Semanales
        </button>

        <button onClick={() => navigate("/missions/subjects")} className="dash-btn">
          Asignaturas
        </button>

        <button onClick={() => navigate("/map")} className="dash-btn">
          Mapa
        </button>

        <button onClick={() => navigate("/progression/attributes")} className="dash-btn">
          Atributos
        </button>

        <button onClick={() => navigate("/progression/stats")} className="dash-btn">
          Gráficas
        </button>

        <button onClick={() => navigate("/challenges")} className="dash-btn">
          Retos
        </button>

        <button onClick={() => navigate("/achievements")} className="dash-btn">
          Logros
        </button>

      </div>
    </div>
  );
}
