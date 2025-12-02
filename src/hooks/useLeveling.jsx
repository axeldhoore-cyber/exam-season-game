// File: src/hooks/useLeveling.jsx
import { useContext, useEffect } from "react";
import { LevelingContext } from "../context/LevelingContext";
import { useModal } from "../context/ModalContext";
import LevelUpModal from "../components/leveling/LevelUpModal";

export default function useLeveling() {
  const ctx = useContext(LevelingContext);
  const { openModal } = useModal();

  if (!ctx) throw new Error("useLeveling must be inside LevelingProvider");

  const { xp, checkLevelUp } = ctx;

  useEffect(() => {
    const r = checkLevelUp();
    if (r?.levelUp) {
      openModal(
        <LevelUpModal oldLevel={r.old} newLevel={r.new} />
      );
    }
  }, [xp]);

  return ctx;
}
