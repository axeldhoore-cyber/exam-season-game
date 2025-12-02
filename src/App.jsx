// File: src/App.jsx

import { useEffect, useMemo, useState } from "react";
import Splash from "./pages/Splash";
import { RouterProvider } from "react-router-dom";
import router from "./router";

export default function App() {
  const [bgLoaded, setBgLoaded] = useState(false);
  const [startFade, setStartFade] = useState(false);
  const [showApp, setShowApp] = useState(false);

  // Elegir imagen según hora
  const backgroundImage = useMemo(() => {
    const hour = new Date().getHours();

    if (hour >= 5 && hour < 8) return "/hero/sunrise.jpg";
    if (hour >= 8 && hour < 11) return "/hero/morning.jpg";
    if (hour >= 11 && hour < 14) return "/hero/almost_noon.jpg";
    if (hour >= 14 && hour < 17) return "/hero/noon.jpg";
    if (hour >= 17 && hour < 19) return "/hero/sunset.jpg";
    if (hour >= 19 && hour < 22) return "/hero/blue_hour.jpg";
    return "/hero/night.jpg";
  }, []);

  // PRELOAD DEL FONDO
  useEffect(() => {
    const img = new Image();
    img.src = backgroundImage;

    img.onload = () => {
      // ⚠️ Aquí ya tenemos fondo en memoria
      setBgLoaded(true);
    };
  }, [backgroundImage]);

  // UNA VEZ EL FONDO ESTÁ LISTO → DISPARAR TRANSICIÓN DEL SPLASH
  useEffect(() => {
    if (!bgLoaded) return;

    const fadeTimer = setTimeout(() => setStartFade(true), 900);
    const appTimer = setTimeout(() => setShowApp(true), 1600);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(appTimer);
    };
  }, [bgLoaded]);

  return (
    <div className="relative h-screen w-screen overflow-hidden">

      {/* FONDO */}
      {bgLoaded && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}

      {/* OVERLAY */}
      {bgLoaded && <div className="absolute inset-0 bg-black/25" />}

      {/* SPLASH — SE RENDERIZA EN EL MISMO FRAME QUE EL FONDO */}
      {bgLoaded && !showApp && (
        <div
          className={`
            absolute inset-0 z-20 flex items-center justify-center
            transition-opacity duration-[700ms]
            ${startFade ? "opacity-0" : "opacity-100"}
          `}
        >
          <Splash />
        </div>
      )}

      {/* APP REAL (Login) */}
      {showApp && (
        <div className="absolute inset-0 z-10">
          <RouterProvider router={router} />
        </div>
      )}
    </div>
  );
}
