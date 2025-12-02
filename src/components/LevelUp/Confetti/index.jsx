import { useEffect } from "react";
import confetti from "canvas-confetti";

export default function Confetti({ trigger }) {
  useEffect(() => {
    if (trigger) {
      confetti({
        particleCount: 200,
        spread: 80,
        origin: { y: 0.6 }
      });
    }
  }, [trigger]);

  return null;
}
