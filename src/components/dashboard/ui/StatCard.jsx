export default function StatCard({ icon, label, value }) {
  return (
    <div className="p-5 rounded-xl bg-neutral-900 text-white border border-neutral-700 flex items-center gap-4">
      <div className="p-3 rounded-xl bg-neutral-800">{icon}</div>
      <div className="flex flex-col">
        <span className="text-sm opacity-70">{label}</span>
        <span className="text-2xl font-bold">{value}</span>
      </div>
    </div>
  );
}
