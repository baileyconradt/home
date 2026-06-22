import { useState } from "react";
import { projects } from "../data/projects";
import type { ProjectCategory } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import PageHeader from "../components/PageHeader";

const filters: ("All" | ProjectCategory)[] = [
  "All",
  "Client Site",
  "Web App",
  "Mobile App",
];

export default function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");

  const shown =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="container-x">
      <PageHeader
        eyebrow="Portfolio"
        title="Projects"
        subtitle="Client websites, web apps, and mobile work. A mix of paid client builds and things I make for fun."
      />

      <div className="flex flex-wrap gap-2 mb-8">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
              filter === f
                ? "bg-[var(--color-accent)] border-[var(--color-accent)] text-white"
                : "border-[var(--color-line)] text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] hover:border-[var(--color-accent)]"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </div>
  );
}
