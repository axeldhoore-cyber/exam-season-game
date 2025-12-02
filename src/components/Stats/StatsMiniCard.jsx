import { motion } from "framer-motion";

export default function StatsMiniCard({ label, value }) {
  return (
    <motion.div
      className="p-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 text-white flex flex-col items-center shadow-lg"
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 14 }}
    >
      <span className="text-sm text-white/70">{label}</span>
      <span className="text-2xl font-bold text-white drop-shadow-lg mt-1">
        {value}
      </span>
    </motion.div>
  );
}
