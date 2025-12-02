// File: src/components/Timer/Sounds/useTimerSounds.js
import { useCallback } from "react";

export function useTimerSounds() {
  const startSound = useCallback(() => {
    new Audio("/sounds/start.mp3").play();
  }, []);

  const pauseSound = useCallback(() => {
    new Audio("/sounds/pause.mp3").play();
  }, []);

  const resumeSound = useCallback(() => {
    new Audio("/sounds/resume.mp3").play();
  }, []);

  const finishSound = useCallback(() => {
    new Audio("/sounds/finish.mp3").play();
  }, []);

  return { startSound, pauseSound, resumeSound, finishSound };
}
