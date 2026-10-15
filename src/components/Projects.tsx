import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Github, Clock } from "lucide-react";
import { featuredProjects, projects } from "../data/projects";
import { site } from "../data/site";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { ProjectArt } from "./ProjectArt";

const others = projects.filter((p) => !p.featured);

function RepoLink({ repo, compact = false }: { repo: string | null; compact?: boolean }) {
  if (repo) {
    return (
      <a
        href={repo}
        target="_blank"
        rel="noreferrer noopener"
        className={`inline-flex items-center gap-1.5 font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground ${
          compact ? "text-xs" : "text-sm"
        }`}
      >
        <Github className="h-4 w-4" /> Repository <ArrowUpRight className="h-3.5 w-3.5" />
      </a>
    );
  }
  return (
    <a
      href={site.github}
      target="_blank"
      rel="noreferrer noopener"
      title="This project does not have a public repository yet — see the GitHub profile"
      className={`inline-flex items-center gap-1.5 text-mutedForeground transition-colors hover:text-foreground ${
        compact ? "text-xs" : "text-sm"
      }`}
    >
      <Clock className="h-3.5 w-3.5" /> Repository not published yet
    </a>
  );
}

function StatusPill({ status, featured }: { status: string; featured: boolean }) {
  const live = /implemented/i.test(status);
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 font-mono text-[10px] uppercase tracking-label text-mutedForeground">
      <span className={`h-1.5 w-1.5 rounded-full ${live ? "bg-signal" : "bg-amber"}`} />
      {status}
      {featured ? " · featured" : ""}
    </span>
  );
}

export function Projects() {
  return (
    <section id="work" className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto w-full max-w-content px-5 sm:px-8">
        <SectionHeading
          index="03"
          eyebrow="Work"
          title={
            <>
              Projects with a real <span className="mark mark-anim">problem behind them</span>.
            </>
          }
          description="Two proposed cybersecurity and network-automation systems, plus tools I have built and shipped. Descriptions stay honest about what is designed versus what is implemented."
        />

        <div className="mt-14 space-y-8">
          {featuredProjects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 80}>
              <article className="card overflow-hidden">
                <div
                  className={`grid gap-0 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] ${
                    i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="p-6 sm:p-8 lg:p-10">
                    <div className="flex flex-wrap items-center gap-2">
                      <StatusPill status={project.status} featured />
                      <span className="font-mono text-[10px] uppercase tracking-label text-mutedForeground">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-tight text-balance sm:text-3xl">
                      {project.short}
                    </h3>
                    <p className="mt-1 font-mono text-[11px] leading-relaxed text-mutedForeground">
                      {project.title.length > 96 ? `${project.title.slice(0, 96)}…` : project.title}
                    </p>

                    <p className="mt-4 text-[15px] leading-relaxed text-mutedForeground text-pretty">
                      {project.overview}
                    </p>

                    <ul className="mt-5 space-y-2">
                      {project.highlights.slice(0, 4).map((point) => (
                        <li key={point} className="flex gap-2.5 text-sm text-foreground/90">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-[2px] bg-primary" />
                          <span className="leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {project.stack.slice(0, 8).map((tech) => (
                        <span key={tech} className="tag">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
                      <Link
                        to={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-all hover:gap-2.5"
                      >
                        Read more <ArrowRight className="h-4 w-4" />
                      </Link>
                      <RepoLink repo={project.repo} />
                    </div>
                  </div>

                  <div className="p-4 sm:p-6 lg:p-6">
                    <div className="aspect-[4/3] w-full lg:aspect-auto lg:h-full lg:min-h-[300px]">
                      <ProjectArt visual={project.visual} />
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-16">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="font-mono text-[11px] font-medium uppercase tracking-label text-primary">03+</span>
              <span className="h-px w-6 bg-border" aria-hidden />
              <span className="label">More work</span>
            </div>
            <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              Other things I've built
            </h3>
          </Reveal>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((project, i) => (
              <Reveal key={project.slug} delay={i * 60}>
                <article className="card flex h-full flex-col overflow-hidden">
                  <div className="aspect-[16/9] w-full border-b border-border p-3">
                    <ProjectArt visual={project.visual} />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <span className="font-mono text-[10px] uppercase tracking-label text-mutedForeground">
                      {project.category}
                    </span>
                    <h4 className="mt-2 font-display text-lg font-semibold leading-snug tracking-tight">
                      {project.short}
                    </h4>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-mutedForeground">{project.overview}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.stack.slice(0, 4).map((tech) => (
                        <span key={tech} className="tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="mt-5 flex items-center justify-between gap-3 border-t border-border pt-4">
                      <RepoLink repo={project.repo} compact />
                      <Link
                        to={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-medium text-primary transition-all hover:gap-1.5"
                      >
                        Details <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
