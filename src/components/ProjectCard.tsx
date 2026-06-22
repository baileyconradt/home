import type { Project } from "../data/projects";
import { ExternalIcon, GitHubIcon } from "./Icons";

export default function ProjectCard({ project }: { project: Project }) {
  const [from, to] = project.gradient ?? ["#7c5cff", "#ff7a59"];

  return (
    <article className="card card-hover overflow-hidden flex flex-col">
      {/* header: image or generated gradient */}
      <div className="relative h-40 overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        ) : (
          <div
            className="h-full w-full flex items-center justify-center"
            style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
          >
            <span className="font-[var(--font-display)] text-4xl font-bold text-white/90">
              {project.title.charAt(0)}
            </span>
          </div>
        )}
        <span className="absolute top-3 left-3 tag bg-black/30 backdrop-blur border-white/20 text-white">
          {project.category}
        </span>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="mt-2 text-sm text-[var(--color-fg-muted)] flex-1">{project.blurb}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary text-sm">
              Live <ExternalIcon className="h-4 w-4" />
            </a>
          )}
          {project.appStoreUrl && (
            <a href={project.appStoreUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary text-sm">
              App Store <ExternalIcon className="h-4 w-4" />
            </a>
          )}
          {project.playStoreUrl && (
            <a href={project.playStoreUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost text-sm">
              Google Play <ExternalIcon className="h-4 w-4" />
            </a>
          )}
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost text-sm">
              <GitHubIcon className="h-4 w-4" /> Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
