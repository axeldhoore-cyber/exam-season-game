// File: src/services/xp/updateTotalXP.js
import { supabase } from "../../lib/supabaseClient"

export async function updateTotalXP(userId, amount) {
  const { data: current, error: err1 } = await supabase
    .from("users")
    .select("total_xp")
    .eq("id", userId)
    .single()

  if (err1) throw err1

  const newXP = (current?.total_xp || 0) + amount

  const { data, error: err2 } = await supabase
    .from("users")
    .update({ total_xp: newXP })
    .eq("id", userId)

  if (err2) throw err2
  return data
}
