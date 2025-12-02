export default function HighlightCard({ title, value, subtitle }) {
  return (
    <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-400 text-white shadow-lg">
      <h3 className="text-xl font-semibold">{title}</h3>
      <div className="text-5xl font-black mt-2">{value}</div>
      <p className="opacity-80 mt-1">{subtitle}</p>
    </div>
  );
}
