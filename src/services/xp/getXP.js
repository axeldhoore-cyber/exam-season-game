// File: src/services/xp/getXP.js
import { supabase } from "../../lib/supabaseClient"

export async function getXP(userId) {
  const { data, error } = await supabase
    .from("xp")
    .select("*")
    .eq("user_id", userId)

  if (error) throw error
  return data
}
