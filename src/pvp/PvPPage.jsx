import { useEffect, useState } from "react";
import supabase from "../supabase/supabaseClient";

export default function PvPPage() {
  const [users, setUsers] = useState([]);
  const [duels, setDuels] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setCurrentUser(data.user));
    loadUsers();
    loadDuels();
  }, []);

  async function loadUsers() {
    const { data } = await supabase.from("profiles").select("*");
    setUsers(data || []);
  }

  async function loadDuels() {
    const { data } = await supabase.from("pvp_duels").select("*");
    setDuels(data || []);
  }

  async function startDuel(opponentId) {
    if (!currentUser) return;
    await supabase.from("pvp_duels").insert([
      {
        challenger: currentUser.id,
        opponent: opponentId,
        status: "pending",
      },
    ]);
    loadDuels();
  }

  async function acceptDuel(duelId) {
    await supabase
      .from("pvp_duels")
      .update({ status: "active" })
      .eq("id", duelId);
    loadDuels();
  }

  async function finishDuel(duelId, winnerId) {
    await supabase
      .from("pvp_duels")
      .update({ status: "finished", winner: winnerId })
      .eq("id", duelId);
    loadDuels();
  }

  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-4">PvP Arena</h1>

      <h2 className="text-xl font-bold mt-4 mb-2">Users</h2>
      <div className="grid grid-cols-2 gap-4">
        {users.map((u) => (
          <div
            key={u.id}
            className="p-4 bg-gray-800 rounded-lg flex justify-between"
          >
            <span>{u.username}</span>
            {currentUser?.id !== u.id && (
              <button
                onClick={() => startDuel(u.id)}
                className="bg-blue-600 px-3 py-1 rounded"
              >
                Duel
              </button>
            )}
          </div>
        ))}
      </div>

      <h2 className="text-xl font-bold mt-6 mb-2">Duels</h2>
      <div className="space-y-3">
        {duels.map((d) => (
          <div
            key={d.id}
            className="p-4 bg-gray-900 rounded-lg flex justify-between"
          >
            <span>
              {d.challer} vs {d.opponent} — {d.status}
            </span>

            {d.status === "pending" && d.opponent === currentUser?.id && (
              <button
                onClick={() => acceptDuel(d.id)}
                className="bg-green-600 px-3 py-1 rounded"
              >
                Accept
              </button>
            )}

            {d.status === "active" && (
              <div className="flex gap-2">
                <button
                  onClick={() => finishDuel(d.id, d.challenger)}
                  className="bg-blue-600 px-3 py-1 rounded"
                >
                  Challenger Wins
                </button>
                <button
                  onClick={() => finishDuel(d.id, d.opponent)}
                  className="bg-red-600 px-3 py-1 rounded"
                >
                  Opponent Wins
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
