// File: src/pages/auth/Login.jsx

import { useState, useEffect } from "react";
import { useSupabase } from "../../supabase/SupabaseProvider";
import { Link, useNavigate } from "react-router-dom";
import HeroLayout from "../../layouts/HeroLayout";

export default function Login() {
  const { supabase } = useSupabase();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // ANIMACIÓN SUAVE AL APARECER
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => setIsVisible(true), 50);
  }, []);

  async function handleLogin(e) {
    e.preventDefault();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (!error) navigate("/dashboard");
    else alert("Credenciales incorrectas");
  }

  return (
    <HeroLayout>
      <div
        className={`
          backdrop-blur-2xl
          bg-white/1
          border border-white/40
          shadow-lg
          shadow-black/20
          shadow-[inset_0_0_80px_rgba(255,255,255,0.02)]
          p-10
          rounded-[26px]
          w-[380px]
          transition-all duration-700 ease-out
          ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-6 scale-95"}
        `}
      >
        <h1 className="text-3xl font-bold mb-8 text-center">Login</h1>

        <form onSubmit={handleLogin} className="flex flex-col gap-5">

          {/* INPUT EMAIL */}
          <input
            type="email"
            placeholder="Email"
            className="
              p-3
              rounded-xl
              bg-white/10
              border border-white/30
              focus:border-white/60
              focus:bg-white/20
              focus:shadow-[0_0_25px_rgba(255,255,255,0.15)]
              outline-none
              transition-all
              duration-300
              text-black
              backdrop-blur-xl
            "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {/* INPUT PASSWORD */}
          <input
            type="password"
            placeholder="Contraseña"
            className="
              p-3
              rounded-xl
              bg-white/10
              border border-white/30
              focus:border-white/60
              focus:bg-white/20
              focus:shadow-[0_0_25px_rgba(255,255,255,0.15)]
              outline-none
              transition-all
              duration-300
              text-black
              backdrop-blur-xl
            "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {/* BOTÓN VISIONOS */}
          <button
            className="
              w-full
              py-3
              rounded-xl
              bg-white/70
              hover:bg-white/90
              active:bg-white
              text-black
              font-semibold
              shadow-lg
              shadow-black/20
              backdrop-blur-xl
              transition-all
              duration-300
            "
          >
            Login
          </button>
        </form>

        <Link
          to="/special-login"
          className="
            text-sm 
            opacity-70 
            hover:opacity-100 
            mt-5 
            block 
            text-center
            transition
          "
        >
          Crear cuenta / Login especial
        </Link>
      </div>
    </HeroLayout>
  );
}
