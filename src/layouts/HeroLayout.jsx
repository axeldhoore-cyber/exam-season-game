// File: src/layouts/HeroLayout.jsx

export default function HeroLayout({ children }) {
  return (
    <div className="relative min-h-screen w-full">

      {/* Overlay solo local */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]" />

      {/* Contenido */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        {children}
      </div>
    </div>
  );
}
