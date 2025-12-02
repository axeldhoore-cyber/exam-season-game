import { useLevelingContext } from "../../context/LevelingContext";
import { motion } from "framer-motion";

export default function LevelDisplay() {
  const { level } = useLevelingContext();

  return (
    <motion.div
      className="px-5 py-3 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg text-white text-xl font-semibold flex items-center gap-3"
      initial={{ opacity: 0, scale: 0.9, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 12 }}
    >
      <span className="text-white/60 text-sm">Nivel</span>
      <span className="text-3xl font-bold text-white drop-shadow-xl">{level}</span>
    </motion.div>
  );
}
