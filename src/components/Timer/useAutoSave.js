// File: src/components/Timer/useAutoSave.js
import { useEffect } from "react";

export function useAutoSave(value, onSave, delay = 1000) {
  useEffect(() => {
    const handler = setTimeout(() => {
      onSave(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay, onSave]);
}
