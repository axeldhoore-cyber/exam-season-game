// File: src/components/SpecialLogin/SpecialLogin.jsx
import { useState } from "react";
import { supabase } from "../../supabase/supabaseClient";

export default function SpecialLogin() {
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState("");

  const handleLogin = async () => {
    setLoading(true);
    await supabase.auth.signInWithPassword({
      email: "special@login.com",
      password: token,
    });
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white gap-4">
      <h1 className="text-4xl font-bold">Special Login</h1>
      <input
        type="password"
        value={token}
        onChange={(e) => setToken(e.target.value)}
        className="px-4 py-2 rounded bg-gray-800 text-white w-64 text-center"
        placeholder="Access Token"
      />
      <button
        onClick={handleLogin}
        className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded text-lg"
        disabled={loading}
      >
        {loading ? "Loading..." : "Enter"}
      </button>
    </div>
  );
}
