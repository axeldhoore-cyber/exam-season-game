export default function GlassCard({ children }) {
  return (
    <div className="backdrop-blur-xl bg-white/10 dark:bg-black/20 border border-white/20 dark:border-black/30 rounded-2xl p-6">
      {children}
    </div>
  );
}
