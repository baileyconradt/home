import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded-md text-sm font-semibold transition-colors ${
      isActive
        ? "text-[var(--color-nav-fg)]"
        : "text-[var(--color-nav-muted)] hover:text-[var(--color-nav-fg)]"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-[var(--color-nav)] shadow-[0_3px_6px_rgba(0,0,0,0.4)]">
      <nav className="container-x flex items-center justify-between h-16">
        <Link
          to="/"
          className="flex items-center gap-2 font-bold text-[var(--color-nav-fg)]"
          onClick={() => setOpen(false)}
        >
          <img src="/images/BC-logo.svg" alt="" className="h-7 w-7" />
          <span>Bailey Conradt</span>
        </Link>

        {/* desktop */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
          <span className="mx-1 h-5 w-px bg-white/15" />
          <ThemeToggle />
        </div>

        {/* mobile controls */}
        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <button
            className="inline-flex flex-col gap-1.5 p-2 text-[var(--color-nav-fg)]"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={`block h-0.5 w-6 bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-6 bg-current transition ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </nav>

      {/* mobile menu */}
      {open && (
        <div className="md:hidden bg-[var(--color-nav)] border-t border-white/10">
          <div className="container-x py-3 flex flex-col gap-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                className={linkClass}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
