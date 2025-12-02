// File: src/pages/auth/SpecialLogin.jsx

import { useState, useEffect } from "react";
import { useSupabase } from "../../supabase/SupabaseProvider";
import { useNavigate } from "react-router-dom";
import HeroLayout from "../../layouts/HeroLayout";

export default function SpecialLogin() {
  const { supabase } = useSupabase();
  const navigate = useNavigate();

  const [code, setCode] = useState("");

  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => setVisible(true), 50);
  }, []);

  async function handleSpecialLogin(e) {
    e.preventDefault();

    const SPECIAL_CODE = "ESG-ALPHA-2025";
    if (code !== SPECIAL_CODE) return;

    const { error } = await supabase.auth.signInWithPassword({
      email: "alpha@examgame.com",
      password: "alpha2025",
    });

    if (!error) navigate("/dashboard");
  }

  return (
    <HeroLayout>
      <div
        className={`
          backdrop-blur-2xl bg-white/1 border border-white/40
          shadow-lg shadow-black/20
          shadow-[inset_0_0_80px_rgba(255,255,255,0.02)]
          p-10 rounded-[26px] w-[380px]
          transition-all duration-700 ease-out
          ${visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-6 scale-95"}
        `}
      >
        <h1 className="text-3xl font-bold mb-8 text-center">Login Especial</h1>

        <form className="flex flex-col gap-5" onSubmit={handleSpecialLogin}>
          <input
            type="text"
            placeholder="Código especial"
            className="
              p-3 rounded-xl bg-white/10 border border-white/30
              focus:border-white/60 focus:bg-white/20
              focus:shadow-[0_0_25px_rgba(255,255,255,0.15)]
              outline-none transition-all duration-300
              text-black backdrop-blur-xl
            "
            onChange={(e) => setCode(e.target.value)}
          />

          <button
            className="
              w-full py-3 rounded-xl bg-white/70 hover:bg-white/90
              active:bg-white text-black font-semibold
              shadow-lg shadow-black/20 backdrop-blur-xl
              transition-all duration-300
            "
          >
            Entrar
          </button>
        </form>

        <button
          className="text-sm opacity-70 hover:opacity-100 mt-5 block text-center transition"
          onClick={() => navigate("/")}
        >
          Volver
        </button>
      </div>
    </HeroLayout>
  );
}
