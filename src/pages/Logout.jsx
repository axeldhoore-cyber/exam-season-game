// File: src/pages/Logout.jsx
import { useEffect } from "react";
import { supabase } from "../utils/supabaseClient";

export default function Logout() {
  useEffect(() => {
    async function doLogout() {
      await supabase.auth.signOut();
      window.location.href = "/login";
    }
    doLogout();
  }, []);

  return null;
}
