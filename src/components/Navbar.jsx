// File: src/components/Navbar.jsx

import { useSupabase } from "../supabase/SupabaseProvider";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const { supabase, session } = useSupabase();
  const navigate = useNavigate();

  async function logout() {
    await supabase.auth.signOut();
    navigate("/");
  }

  return (
    <header className="w-full h-16 bg-[#0c0c0c] border-b border-neutral-800 flex justify-between items-center px-6 fixed top-0 left-60 z-20">
      <div>
        <h2 className="text-white font-semibold">Bienvenido</h2>
        <p className="text-neutral-400 text-sm">{session?.user?.email}</p>
      </div>

      <button
        className="px-5 py-2 bg-red-600 text-white rounded-lg"
        onClick={logout}
      >
        Cerrar sesión
      </button>
    </header>
  );
}
