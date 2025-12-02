// File: src/components/leveling/LevelUpModal.jsx
import { motion } from "framer-motion";

export default function LevelUpModal({ oldLevel, newLevel }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="backdrop-blur-xl bg-white/10 p-8 rounded-2xl shadow-xl border border-white/20 
                 flex flex-col items-center gap-4 text-center"
    >
      <motion.h2 
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        className="text-4xl font-bold text-purple-300 drop-shadow-lg"
      >
        ¡Nivel {newLevel}!
      </motion.h2>

      <p className="text-white/80 text-lg">
        Has subido de nivel ({oldLevel} → {newLevel})
      </p>

      <motion.div
        initial={{ rotate: -10 }}
        animate={{ rotate: 0 }}
        className="w-24 h-24 rounded-xl bg-gradient-to-br from-purple-500/40 to-pink-500/40 
                   backdrop-blur-md flex items-center justify-center text-4xl font-bold text-white shadow-lg"
      >
        +1
      </motion.div>

      <p className="text-white/60 text-sm">Punto de atributo desbloqueado</p>
    </motion.div>
  );
}
