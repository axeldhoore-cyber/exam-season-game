// File: src/components/Timer/TimerAnimation.jsx
import { motion } from "framer-motion";

export default function TimerAnimation({ isRunning }) {
  return (
    <motion.div
      className="w-6 h-6 rounded-full bg-blue-500"
      animate={{
        scale: isRunning ? [1, 1.3, 1] : 1,
        opacity: isRunning ? [1, 0.6, 1] : 1,
      }}
      transition={{
        duration: 1,
        repeat: isRunning ? Infinity : 0,
      }}
    />
  );
}
