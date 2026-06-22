import { useEffect, useState } from "react";

function getInitial(): boolean {
  if (typeof document !== "undefined") {
    return document.documentElement.classList.contains("dark");
  }
  return false;
}

function SunIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
    </svg>
  );
}

export default function ThemeToggle() {
  const [dark, setDark] = useState(getInitial);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    try {
      localStorage.setItem("theme", dark ? "dark" : "light");
    } catch {
      /* ignore */
    }
  }, [dark]);

  return (
    <button
      type="button"
      role="switch"
      aria-checked={dark}
      onClick={() => setDark((v) => !v)}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      title={dark ? "Light mode" : "Dark mode"}
      className="relative inline-flex items-center h-7 w-[3.25rem] rounded-full bg-white/10 ring-1 ring-white/15 transition-colors hover:bg-white/15"
    >
      {/* track icons */}
      <SunIcon className={`absolute left-1.5 h-4 w-4 transition-colors ${dark ? "text-white/35" : "text-amber-300"}`} />
      <MoonIcon className={`absolute right-1.5 h-3.5 w-3.5 transition-colors ${dark ? "text-sky-200" : "text-white/35"}`} />
      {/* knob */}
      <span
        className={`relative z-10 grid place-items-center h-5 w-5 rounded-full bg-white text-[#343a40] shadow transition-transform duration-200 ${
          dark ? "translate-x-[1.625rem]" : "translate-x-1"
        }`}
      >
        {dark ? <MoonIcon className="h-3 w-3" /> : <SunIcon className="h-3 w-3" />}
      </span>
    </button>
  );
}
