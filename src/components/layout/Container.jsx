// File: src/components/layout/Container.jsx
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export default function Container({ children }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`w-full min-h-screen ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      } px-6 py-4`}
    >
      {children}
    </div>
  );
}
