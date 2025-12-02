import weeklyMissions from "../../data/weeklyMissions.json";

export default function WeeklyMissionsList() {
  return (
    <div className="grid gap-4">
      {weeklyMissions.map((m) => (
        <div key={m.id} className="border p-4 rounded">
          <h2 className="text-xl font-semibold">{m.title}</h2>
          <p className="text-sm opacity-70">{m.description}</p>
        </div>
      ))}
    </div>
  );
}
