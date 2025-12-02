// File: src/components/ThemeToggle.jsx
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="px-3 py-1 rounded bg-gray-700 text-white dark:bg-gray-200 dark:text-black"
    >
      {theme === "dark" ? "Light" : "Dark"}
    </button>
  );
}
