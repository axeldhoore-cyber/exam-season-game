// File: src/hooks/useTimer.js
import { useState, useEffect, useRef } from "react";

export default function useTimer(initialSeconds = 0) {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const start = () => {
    if (intervalRef.current) return;
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);
  };

  const stop = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const reset = () => {
    setSeconds(0);
    stop();
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return { seconds, isRunning, start, stop, reset };
}
