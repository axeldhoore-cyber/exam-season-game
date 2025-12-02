import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLevelingContext } from "../../context/LevelingContext";
import Confetti from "../LevelUp/Confetti";

export default function LevelUpModal() {
  const { level, levelingUp, closeLevelUp, pendingXP, clearPending } =
    useLevelingContext();

  const [show, setShow] = useState(false);

  useEffect(() => {
    if (levelingUp) {
      setShow(true);
      const timer = setTimeout(() => {
        clearPending();
      }, 400);

      return () => clearTimeout(timer);
    } else {
      setShow(false);
    }
  }, [levelingUp, clearPending]);

  const handleClose = () => {
    setShow(false);
    setTimeout(() => {
      closeLevelUp();
    }, 300);
  };

  return (
    <AnimatePresence>
      {show && (
        <>
          <Confetti />

          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />

          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { type: "spring", stiffness: 120, damping: 12 },
            }}
            exit={{
              opacity: 0,
              scale: 0.7,
              transition: { duration: 0.25 },
            }}
          >
            <div className="w-full max-w-md bg-white/15 backdrop-blur-xl border border-white/20 rounded-3xl shadow-xl text-center p-8 relative overflow-hidden">

              <motion.h1
                className="text-4xl font-bold text-white drop-shadow-md"
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
              >
                ¡Nivel {level}!
              </motion.h1>

              <motion.p
                className="text-white/80 mt-3 text-lg"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
              >
                Has ganado {pendingXP} XP
              </motion.p>

              <motion.button
                className="mt-8 px-6 py-3 rounded-xl bg-white/20 text-white font-semibold hover:bg-white/30 transition-all"
                onClick={handleClose}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
              >
                Continuar
              </motion.button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
