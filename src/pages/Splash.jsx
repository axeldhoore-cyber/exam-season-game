// File: src/pages/Splash.jsx

import { useEffect, useState } from "react";

export default function Splash() {
  const [animate, setAnimate] = useState(false);

  // Disparamos la animación en el primer frame
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 10); // un delay mínimo asegura que React pinte el DOM primero

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-full w-full flex flex-col items-center justify-center">
      
      {/* LOGO ANIMADO */}
      <div
        className={`
          w-24 h-24 rounded-full 
          border border-white/40 
          backdrop-blur-2xl 
          flex items-center justify-center 
          shadow-lg shadow-black/40 
          bg-white/10
          text-white text-4xl font-bold
          
          transition-all duration-[700ms] ease-[cubic-bezier(.25,1.3,.4,1)]
          ${animate ? "opacity-100 scale-100" : "opacity-0 scale-75"}
        `}
      >
        E
      </div>

      {/* TEXTO */}
      <h1 
        className={`
          text-white mt-6 text-2xl tracking-wide font-semibold
          transition-all duration-[900ms]
          ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
        `}
      >
        Exam Season Game
      </h1>
    </div>
  );
}
