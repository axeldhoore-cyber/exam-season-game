import { Sun, Moon, Bell, Search } from "lucide-react";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Topbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className={`h-16 w-full flex items-center justify-between px-8 border-b ${
        theme === "dark"
          ? "bg-black border-neutral-800 text-white"
          : "bg-white border-neutral-300 text-black"
      }`}
    >
      {/* LEFT */}
      <div className="text-xl font-bold">📊 Panel</div>

      {/* CENTER SEARCH */}
      <div className="hidden md:flex items-center bg-neutral-200 dark:bg-neutral-800 px-4 py-2 rounded-xl gap-2 w-96">
        <Search size={18} className="opacity-50" />
        <input
          type="text"
          placeholder="Buscar..."
          className="bg-transparent outline-none w-full"
        />
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4">

        {/* THEME TOGGLE */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg border border-neutral-500"
        >
          {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        {/* NOTIFICATIONS */}
        <button className="p-2 rounded-lg border border-neutral-500">
          <Bell size={20} />
        </button>

        {/* AVATAR */}
        <div className="w-10 h-10 bg-neutral-300 dark:bg-neutral-700 rounded-full"></div>
      </div>
    </div>
  );
}
