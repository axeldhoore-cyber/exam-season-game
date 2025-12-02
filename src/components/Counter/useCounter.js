// File: src/components/Counter/useCounter.js
import { useEffect, useRef, useState } from "react";

export default function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  const pausedRef = useRef(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!pausedRef.current) {
        setCount((c) => c + 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const togglePause = (pause) => {
    pausedRef.current = pause;
  };

  return { count, togglePause };
}
