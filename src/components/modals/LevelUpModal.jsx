import { useEffect, useState } from "react";
import { useModal } from "../../context/ModalContext";
import { Link } from "react-router-dom";

export default function LevelUpModal({ oldLevel, newLevel }) {
  const { closeModal } = useModal();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 50);
  }, []);

  return (
    <div
      className={`transition-all duration-500 
      ${animate ? "scale-100 opacity-100" : "scale-75 opacity-0"}
      bg-white/10 border border-white/20 shadow-2xl backdrop-blur-2xl
      p-8 rounded-3xl text-center max-w-sm`}
    >
      <h2 className="text-3xl font-bold mb-2">¡Nivel Subido!</h2>

      <p className="text-lg opacity-80 mb-4">
        Has pasado de nivel {oldLevel} → {newLevel}
      </p>

      <div className="flex justify-center gap-4 mb-6">
        <span className="px-4 py-2 bg-purple-600/60 text-white rounded-xl">
          +1 Atributo
        </span>
      </div>

      <Link
        to="/progression/attributes"
        onClick={closeModal}
        className="block bg-purple-600 hover:bg-purple-700 transition text-white px-4 py-2 rounded-xl mb-3"
      >
        Asignar Atributos
      </Link>

      <button
        onClick={closeModal}
        className="text-white/70 hover:text-white transition"
      >
        Cerrar
      </button>
    </div>
  );
}
