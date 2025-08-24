import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const linkBase = "capitalize px-3 py-2 rounded-xl text-gray-900 dark:text-gray-100 hover:text-indigo-500 dark:hover:text-indigo-400 transition";

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[92%] md:w-[80%] z-50 card-glass flex items-center justify-between px-4 py-3">
      <Link to="/" className="font-bold text-gray-900 dark:text-gray-100">
        Anurag
      </Link>
      <div className="flex items-center gap-2 md:gap-4">
        <Link to="/" className={linkBase}>Home</Link>
        <Link to="/projects" className={linkBase}>Projects</Link>
        {/* <Link to="/resume" className={linkBase}>Resume</Link> */}
        <Link to="/contact" className={linkBase}>Contact</Link>

        {/* <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="ml-2 p-2 rounded-xl bg-white/60 dark:bg-gray-800/60 hover:scale-110 transition"
          aria-label="Toggle theme"
        >
          {theme === "light" ? <Moon size={18} className="text-gray-900 dark:text-gray-100" /> : <Sun size={18} className="text-gray-900 dark:text-gray-100" />}
        </button> */}
      </div>
    </nav>
  );
}