// File: src/components/LevelUpModal/LevelUpModal.jsx
import { useEffect } from "react";

export default function LevelUpModal({ isOpen, onClose, level }) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-zinc-900 rounded-2xl p-8 w-[400px] text-center shadow-xl">
        <h2 className="text-3xl font-bold mb-4">¡Nivel {level} alcanzado! 🎉</h2>

        <p className="text-lg mb-6">
          Has subido de nivel. Sigue así.
        </p>

        <button
          onClick={onClose}
          className="w-full py-3 rounded-xl bg-blue-600 text-white dark:bg-blue-500"
        >
          Continuar
        </button>
      </div>
    </div>
  );
}
