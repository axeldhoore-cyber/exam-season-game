import dailyMissions from "../../data/dailyMissions.json";

export default function DailyMissionsList() {
  return (
    <div className="grid gap-4">
      {dailyMissions.map((m) => (
        <div key={m.id} className="border p-4 rounded">
          <h2 className="text-xl font-semibold">{m.title}</h2>
          <p className="text-sm opacity-70">{m.description}</p>
        </div>
      ))}
    </div>
  );
}
