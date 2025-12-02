export default function AchievementItem({ a }) {
  return (
    <div className="border p-4 rounded">
      <h2 className="font-semibold text-lg">{a.code}</h2>
      <p className="opacity-70 text-sm">{a.created_at}</p>
    </div>
  );
}
