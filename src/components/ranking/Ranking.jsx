// File: src/components/ranking/Ranking.jsx
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";

export default function Ranking() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    loadRanking();
  }, []);

  async function loadRanking() {
    const { data, error } = await supabase
      .from("ranking")
      .select("*")
      .order("xp", { ascending: false });

    if (!error) setPlayers(data);
  }

  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-4">Ranking</h1>
      <div className="flex flex-col gap-3">
        {players.map((p, i) => (
          <div
            key={p.id}
            className="flex justify-between bg-zinc-800 p-3 rounded-lg"
          >
            <span>
              #{i + 1} — {p.username}
            </span>
            <span>{p.xp} XP</span>
          </div>
        ))}
      </div>
    </div>
  );
}
