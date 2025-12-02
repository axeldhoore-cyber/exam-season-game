// File: src/components/Achievements/AchievementsTable.jsx
import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_ANON_KEY);

export default function AchievementsTable() {
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    const fetchAchievements = async () => {
      const { data, error } = await supabase
        .from("achievements")
        .select("*")
        .order("created_at", { ascending: false });
      if (!error) setAchievements(data);
    };
    fetchAchievements();
  }, []);

  return (
    <div className="p-4 w-full max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Achievements</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse border border-gray-700">
          <thead className="bg-gray-900 text-white">
            <tr>
              <th className="p-3 border border-gray-700">Title</th>
              <th className="p-3 border border-gray-700">Description</th>
              <th className="p-3 border border-gray-700">XP</th>
              <th className="p-3 border border-gray-700">Date</th>
            </tr>
          </thead>
          <tbody>
            {achievements.map((a) => (
              <tr key={a.id} className="bg-gray-800 text-gray-200">
                <td className="p-3 border border-gray-700">{a.title}</td>
                <td className="p-3 border border-gray-700">{a.description}</td>
                <td className="p-3 border border-gray-700">{a.xp}</td>
                <td className="p-3 border border-gray-700">
                  {new Date(a.created_at).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
