import { useEffect, useState } from "react";
import { Sun, Moon, Monitor } from "lucide-react";

type ThemeMode = "light" | "dark" | "auto";

function getInitialMode(): ThemeMode {
  if (typeof window === "undefined") return "auto";

  const stored = window.localStorage.getItem("theme");
  if (stored === "light" || stored === "dark" || stored === "auto") {
    return stored;
  }

  return "auto";
}

function applyThemeMode(mode: ThemeMode) {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const resolved = mode === "auto" ? (prefersDark ? "dark" : "light") : mode;

  document.documentElement.classList.remove("light", "dark");
  document.documentElement.classList.add(resolved);
  document.documentElement.style.colorScheme = resolved;
}

export default function ThemeToggle() {
  const [mode, setMode] = useState<ThemeMode>("auto");
  const [spin, setSpin] = useState(0);

  useEffect(() => {
    const initialMode = getInitialMode();
    setMode(initialMode);
    applyThemeMode(initialMode);
  }, []);

  function toggleMode() {
    const nextMode: ThemeMode =
      mode === "light" ? "dark" : mode === "dark" ? "auto" : "light";

    setMode(nextMode);
    applyThemeMode(nextMode);
    window.localStorage.setItem("theme", nextMode);

    setSpin((prev) => prev + 360);
  }

  const Icon = mode === "light" ? Sun : mode === "dark" ? Moon : Monitor;

  return (
    <button
      type="button"
      onClick={toggleMode}
      className="flex items-center gap-2 rounded-full border border-border bg-bg px-4 py-2 text-sm font-medium text-text transition-colors duration-300 hover:border-primary hover:text-primary cursor-pointer"
    >
      <span
        style={{ transform: `rotate(${spin}deg)` }}
        className="inline-flex transition-transform duration-500 ease-in-out"
      >
        <Icon size={16} />
      </span>

      <span className="hidden sm:inline">
        {mode === "auto" ? "Auto" : mode === "dark" ? "Dark" : "Light"}
      </span>
    </button>
  );
}
