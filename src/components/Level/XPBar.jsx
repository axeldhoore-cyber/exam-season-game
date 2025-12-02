import { motion } from "framer-motion";
import { useLevelingContext } from "../../context/LevelingContext";

export default function XPBar() {
  const { xp, level, getRequiredXP } = useLevelingContext();
  const required = getRequiredXP(level);
  const progress = Math.min(xp / required, 1);

  return (
    <div className="w-full bg-white/10 h-4 rounded-xl overflow-hidden backdrop-blur-lg border border-white/20">
      <motion.div
        className="h-full bg-purple-400/80"
        initial={{ width: 0 }}
        animate={{ width: `${progress * 100}%` }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
    </div>
  );
}
