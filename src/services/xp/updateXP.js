// File: src/services/xp/updateXP.js
import { supabase } from "../../lib/supabaseClient"

export async function addXP(userId, amount) {
  const { data, error } = await supabase
    .from("xp")
    .insert([{ user_id: userId, amount }])

  if (error) throw error
  return data
}
