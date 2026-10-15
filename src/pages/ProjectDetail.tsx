import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Github,
  Layers,
  ListChecks,
  AlertTriangle,
  Lightbulb,
  Cpu,
  Link2,
} from "lucide-react";
import { projects, getProject } from "../data/projects";
import { site } from "../data/site";
import { ProjectArt } from "../components/ProjectArt";
import { Reveal } from "../components/Reveal";

function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70svh] w-full max-w-content flex-col items-center justify-center px-5 text-center">
      <span className="label">404</span>
      <h1 className="mt-4 font-display text-4xl font-bold tracking-tight">Project not found</h1>
      <p className="mt-4 max-w-md text-mutedForeground">
        That project doesn't exist (yet). Head back to the work section to see what's there.
      </p>
      <Link to="/#work" className="btn-primary mt-8">
        <ArrowLeft className="h-4 w-4" /> Back to work
      </Link>
    </section>
  );
}

export function ProjectDetail() {
  const { slug = "" } = useParams();
  const project = getProject(slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
    document.title = project
      ? `${project.short} · ${site.name}`
      : `Project not found · ${site.name}`;
  }, [project]);

  if (!project) {
    return (
      <main id="top" className="pb-[var(--dock-clearance)] pt-16">
        <NotFound />
      </main>
    );
  }

  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <main id="top" className="pb-[var(--dock-clearance)] pt-8">
      <div className="mx-auto w-full max-w-content px-5 sm:px-8">
        <Link
          to="/#work"
          className="inline-flex items-center gap-1.5 text-sm text-mutedForeground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> Back to work
        </Link>

        <header className="mt-8 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 font-mono text-[10px] uppercase tracking-label text-mutedForeground">
                <span className="h-1.5 w-1.5 rounded-full bg-amber" />
                {project.status}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-label text-mutedForeground">
                {project.category} · {project.year}
              </span>
            </div>

            <h1 className="mt-5 font-display text-3xl font-bold leading-[1.08] tracking-[-0.03em] text-balance sm:text-4xl lg:text-[2.75rem]">
              {project.title}
            </h1>

            <p className="mt-5 text-base leading-relaxed text-mutedForeground text-pretty sm:text-lg">
              {project.overview}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
              {project.repo ? (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground"
                >
                  <Github className="h-4 w-4" /> View repository
                </a>
              ) : (
                <a
                  href={site.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1.5 text-sm text-mutedForeground hover:text-foreground"
                >
                  <Github className="h-4 w-4" /> No public repository yet — see profile
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              )}
              {project.demo ? (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:gap-2.5"
                >
                  <ArrowUpRight className="h-4 w-4" /> Live demo
                </a>
              ) : null}
            </div>
          </div>

          <div className="aspect-[4/3] w-full">
            <ProjectArt visual={project.visual} />
          </div>
        </header>

        <div className="mt-16 grid gap-12 lg:grid-cols-[minmax(0,1fr)_17rem] lg:gap-16">
          <div className="space-y-14">
            {project.problem ? (
              <Reveal>
                <section>
                  <div className="flex items-center gap-2.5">
                    <AlertTriangle className="h-4 w-4 text-primary" />
                    <h2 className="font-display text-xl font-semibold tracking-tight">Problem statement</h2>
                  </div>
                  <p className="mt-4 text-[15px] leading-relaxed text-mutedForeground text-pretty">{project.problem}</p>
                </section>
              </Reveal>
            ) : null}

            {project.approach ? (
              <Reveal>
                <section>
                  <div className="flex items-center gap-2.5">
                    <Lightbulb className="h-4 w-4 text-primary" />
                    <h2 className="font-display text-xl font-semibold tracking-tight">Proposed approach</h2>
                  </div>
                  <p className="mt-4 text-[15px] leading-relaxed text-mutedForeground text-pretty">{project.approach}</p>
                </section>
              </Reveal>
            ) : null}

            {project.architecture && project.architecture.length ? (
              <Reveal>
                <section>
                  <div className="flex items-center gap-2.5">
                    <Layers className="h-4 w-4 text-primary" />
                    <h2 className="font-display text-xl font-semibold tracking-tight">System architecture</h2>
                  </div>
                  <div className="mt-6 space-y-4">
                    {project.architecture.map((layer) => (
                      <div key={layer.layer} className="card overflow-hidden">
                        <div className="border-b border-border bg-secondary/60 px-5 py-2.5">
                          <span className="label">{layer.layer}</span>
                        </div>
                        <ul className="divide-y divide-border">
                          {layer.items.map((item) => (
                            <li key={item.name} className="flex flex-col gap-0.5 px-5 py-3.5">
                              <span className="text-sm font-medium text-foreground">{item.name}</span>
                              <span className="text-xs leading-relaxed text-mutedForeground">{item.note}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </section>
              </Reveal>
            ) : null}

            {project.modules && project.modules.length ? (
              <Reveal>
                <section>
                  <div className="flex items-center gap-2.5">
                    <ListChecks className="h-4 w-4 text-primary" />
                    <h2 className="font-display text-xl font-semibold tracking-tight">Main modules</h2>
                  </div>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {project.modules.map((mod) => (
                      <li key={mod.name} className="rounded-xl border border-border bg-card p-4 shadow-card">
                        <p className="text-sm font-semibold text-foreground">{mod.name}</p>
                        <p className="mt-1.5 text-xs leading-relaxed text-mutedForeground">{mod.note}</p>
                      </li>
                    ))}
                  </ul>
                </section>
              </Reveal>
            ) : null}

            {project.blocks.map((block) => (
              <Reveal key={block.heading}>
                <section>
                  <h2 className="font-display text-xl font-semibold tracking-tight">{block.heading}</h2>
                  {block.body ? (
                    <p className="mt-4 text-[15px] leading-relaxed text-mutedForeground text-pretty">{block.body}</p>
                  ) : null}
                  {block.bullets ? (
                    <ul className="mt-4 space-y-2.5">
                      {block.bullets.map((b) => (
                        <li key={b} className="flex gap-3 text-[15px] leading-relaxed text-foreground/90">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-[2px] bg-primary" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              </Reveal>
            ))}
          </div>

          <aside className="lg:sticky lg:top-8 lg:self-start">
            <div className="card overflow-hidden">
              <div className="flex items-center gap-2 border-b border-border bg-secondary/60 px-5 py-3">
                <Cpu className="h-3.5 w-3.5 text-mutedForeground" />
                <span className="label">technology stack</span>
              </div>
              <dl className="divide-y divide-border">
                {project.stackGroups.map((group) => (
                  <div key={group.category} className="px-5 py-3.5">
                    <dt className="font-mono text-[10px] uppercase tracking-label text-mutedForeground">
                      {group.category}
                    </dt>
                    <dd className="mt-1.5 flex flex-wrap gap-1.5">
                      {group.items.map((item) => (
                        <span key={item} className="tag">
                          {item}
                        </span>
                      ))}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </aside>
        </div>

        <div className="mt-20 border-t border-border pt-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link to="/#work" className="btn-secondary">
              <ArrowLeft className="h-4 w-4" /> All projects
            </Link>
            <Link to="/#contact" className="btn-primary">
              Get in touch <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12">
            <div className="flex items-center gap-2">
              <Link2 className="h-4 w-4 text-mutedForeground" />
              <span className="label">More projects</span>
            </div>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {others.map((other) => (
                <Link
                  key={other.slug}
                  to={`/projects/${other.slug}`}
                  className="card group p-4 transition-all hover:-translate-y-0.5"
                >
                  <span className="font-mono text-[10px] uppercase tracking-label text-mutedForeground">
                    {other.category}
                  </span>
                  <p className="mt-2 font-display text-base font-semibold leading-snug tracking-tight">
                    {other.short}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-primary transition-all group-hover:gap-1.5">
                    Details <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
