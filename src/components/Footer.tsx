import { Link } from "react-router-dom";
import { socials, site } from "../data/site";
import { SocialIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="mt-24 bg-[var(--color-nav)] text-[var(--color-nav-fg)]">
      <div className="container-x py-12 flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <div className="text-lg font-bold">{site.name}</div>
          <p className="mt-2 text-sm text-[var(--color-nav-muted)]">{site.role}</p>
          <div className="mt-4 flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.icon === "email" ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={s.label}
                className="grid place-items-center h-9 w-9 rounded-full border border-white/15 text-[var(--color-nav-muted)] hover:text-[var(--color-nav-fg)] hover:border-white/40 transition-colors"
              >
                <SocialIcon name={s.icon} className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex gap-12 text-sm">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-accent)]">Explore</span>
            <Link to="/projects" className="text-[var(--color-nav-muted)] hover:text-[var(--color-nav-fg)]">Projects</Link>
            <Link to="/music" className="text-[var(--color-nav-muted)] hover:text-[var(--color-nav-fg)]">Music</Link>
            <Link to="/about" className="text-[var(--color-nav-muted)] hover:text-[var(--color-nav-fg)]">About</Link>
            <Link to="/contact" className="text-[var(--color-nav-muted)] hover:text-[var(--color-nav-fg)]">Contact</Link>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-accent)]">More</span>
            <a href={site.blog} target="_blank" rel="noopener noreferrer" className="text-[var(--color-nav-muted)] hover:text-[var(--color-nav-fg)]">Blog</a>
            <a href="https://open.spotify.com/show/2UoczsS60XNqDjCfJqAoIo" target="_blank" rel="noopener noreferrer" className="text-[var(--color-nav-muted)] hover:text-[var(--color-nav-fg)]">Podcast</a>
            <a href={site.resume} target="_blank" rel="noopener noreferrer" className="text-[var(--color-nav-muted)] hover:text-[var(--color-nav-fg)]">Resume (PDF)</a>
          </div>
        </div>
      </div>

      <div className="container-x pb-10 text-xs text-[var(--color-nav-muted)]">
        © {new Date().getFullYear()} {site.name}. Built with React + Vite.
      </div>
    </footer>
  );
}
