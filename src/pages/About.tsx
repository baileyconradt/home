import { site } from "../data/site";
import { experience, politicalWork, education, skills } from "../data/experience";
import PageHeader from "../components/PageHeader";
import Bio from "../components/Bio";
import { ExternalIcon } from "../components/Icons";

export default function About() {
  return (
    <div className="container-x">
      <PageHeader eyebrow="About" title="About me" />

      <div className="grid md:grid-cols-[1fr_2fr] gap-10">
        {/* Sidebar */}
        <div className="space-y-8">
          <div>
            <img
              src={site.avatar}
              alt={site.name}
              className="rounded-2xl w-full aspect-square object-cover border border-[var(--color-line)]"
            />
            <a href={site.resume} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-6 w-full justify-center">
              Download Resume <ExternalIcon className="h-4 w-4" />
            </a>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xl font-bold mb-3">Education</h2>
            <div className="space-y-4">
              {education.map((e) => (
                <div key={e.school} className="card p-4">
                  <div className="font-semibold">{e.school}</div>
                  <div className="text-sm text-[var(--color-accent-soft)]">{e.degree}</div>
                  <div className="text-sm text-[var(--color-fg-muted)]">{e.period}</div>
                  {e.detail && <div className="mt-1 text-sm text-[var(--color-fg-muted)]">{e.detail}</div>}
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-xl font-bold mb-3">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <span key={s} className="tag">{s}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Main column */}
        <div>
          <Bio className="text-lg text-[var(--color-fg-muted)] leading-relaxed" />

          {/* Political & civic work—featured */}
          <section className="mt-10 card p-6 border-l-4 border-l-[var(--color-accent)]">
            <h2 className="text-2xl font-bold">Political &amp; Civic Work</h2>
            <ul className="mt-4 space-y-3">
              {politicalWork.map((item) => (
                <li key={item} className="flex gap-3 text-[var(--color-fg-muted)]">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Experience */}
          <h2 className="mt-12 mb-6 text-2xl font-bold">Experience</h2>
          <ol className="relative border-l border-[var(--color-line)] ml-2">
            {experience.map((role) => (
              <li key={role.title + role.org} className="mb-8 ml-6">
                <span className="absolute -left-[7px] mt-1.5 h-3 w-3 rounded-full bg-[var(--color-accent)]" />
                <div className="flex flex-wrap items-baseline gap-x-2">
                  <h3 className="font-semibold">{role.title}</h3>
                  <span className="text-sm text-[var(--color-fg-muted)]">· {role.period}</span>
                </div>
                <div className="text-sm text-[var(--color-accent-soft)]">
                  {role.href ? (
                    <a href={role.href} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      {role.org}
                    </a>
                  ) : (
                    role.org
                  )}
                </div>
                <p className="mt-2 text-sm text-[var(--color-fg-muted)]">{role.blurb}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
