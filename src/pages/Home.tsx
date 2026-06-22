import { Link } from "react-router-dom";
import { site, socials } from "../data/site";
import { featuredProjects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import Bio from "../components/Bio";
import CorgiDigitalCTA from "../components/CorgiDigitalCTA";
import { ArrowIcon, SocialIcon } from "../components/Icons";

// Fixed brand colors for the hero social icons. GitHub + email are handled with
// theme-aware classes below so they stay visible in both light and dark mode.
const brandColors: Record<string, string> = {
  facebook: "#1877F2",
  instagram: "#E4405F",
  linkedin: "#0A66C2",
  twitter: "#1DA1F2",
};

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section>
        <div className="container-x pt-20 pb-16 md:pt-24 md:pb-20">
          <div className="grid md:grid-cols-[1.4fr_1fr] gap-12 items-center">
            <div className="order-2 md:order-1">
              <p className="eyebrow mb-4">{site.role}</p>
              <h1 className="text-5xl md:text-6xl font-bold leading-[1.05]">
                Hi, I'm Bailey!
              </h1>
              <Bio className="mt-6 max-w-xl text-lg text-[var(--color-fg-muted)]" />
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/projects" className="btn btn-primary">
                  View my work <ArrowIcon className="h-4 w-4" />
                </Link>
                <a href={site.resume} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                  Resume
                </a>
                <Link to="/contact" className="btn btn-ghost">
                  Get in touch
                </Link>
              </div>
              <div className="mt-8 flex gap-3">
                {socials.map((s) => {
                  const brand = brandColors[s.icon];
                  const themeClass =
                    s.icon === "github"
                      ? "text-[var(--color-fg)]"
                      : s.icon === "email"
                        ? "text-[var(--color-accent)]"
                        : "";
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target={s.icon === "email" ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      style={brand ? { color: brand } : undefined}
                      className={`grid place-items-center h-10 w-10 rounded-full border border-[var(--color-line)] hover:border-current transition-colors ${themeClass}`}
                    >
                      <SocialIcon name={s.icon} className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="order-1 md:order-2 justify-self-center md:justify-self-end">
              <img
                src={site.avatar}
                alt={site.name}
                className="h-56 w-56 md:h-72 md:w-72 rounded-full object-cover shadow-[0_4px_12px_rgba(0,0,0,0.3)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured work */}
      <section className="container-x py-12">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="eyebrow mb-2">Selected work</p>
            <h2 className="text-3xl font-bold">Featured projects</h2>
          </div>
          <Link to="/projects" className="hidden sm:inline-flex btn btn-ghost text-sm">
            All projects <ArrowIcon className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>

        <div className="mt-8 sm:hidden">
          <Link to="/projects" className="btn btn-ghost text-sm w-full justify-center">
            All projects <ArrowIcon className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Quick about / music teaser */}
      <section className="container-x py-12">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-8">
            <p className="eyebrow mb-3">About</p>
            <h3 className="text-2xl font-bold">A little about me</h3>
            <p className="mt-4 text-[var(--color-fg-muted)]">
              Web developer, project manager, and musician from Green Bay,
              Wisconsin—building websites by day, making music and silly memes
              the rest of the time.
            </p>
            <Link to="/about" className="mt-6 inline-flex btn btn-ghost text-sm">
              More about me <ArrowIcon className="h-4 w-4" />
            </Link>
          </div>
          <div className="card p-8 relative overflow-hidden">
            <p className="eyebrow mb-3">Music</p>
            <h3 className="text-2xl font-bold">Covers &amp; originals</h3>
            <p className="mt-4 text-[var(--color-fg-muted)]">
              Piano covers and a handful of original demos—have a listen.
            </p>
            <Link to="/music" className="mt-6 inline-flex btn btn-primary text-sm">
              Listen <ArrowIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Corgi Digital CTA */}
      <section className="container-x py-12">
        <CorgiDigitalCTA />
      </section>
    </>
  );
}
