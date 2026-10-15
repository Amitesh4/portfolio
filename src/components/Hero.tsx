import { Link } from "react-router-dom";
import { ArrowDown, ArrowRight, Github, Linkedin, Mail, FileText, MapPin } from "lucide-react";
import { site } from "../data/site";
import { Reveal } from "./Reveal";

function HeroPanel() {
  return (
    <div className="relative">
      <div className="card relative overflow-hidden p-5 sm:p-6">
        <div className="flex items-center justify-between">
          <span className="label">system / profile</span>
          <span className="pill !border-transparent !bg-secondary !py-1 !text-[10px]">
            <span className="h-1.5 w-1.5 rounded-full bg-signal animate-pulse-dot" />
            active
          </span>
        </div>

        <div className="relative mt-5 overflow-hidden rounded-xl border border-border bg-secondary/50 bg-grid-flat p-4">
          <svg viewBox="0 0 320 150" className="h-auto w-full" role="img" aria-label="Illustrative network and wireless signal diagram">
            <defs>
              <linearGradient id="heroEdge" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="hsl(233 90% 57%)" stopOpacity="0.1" />
                <stop offset="1" stopColor="hsl(233 90% 57%)" stopOpacity="0.8" />
              </linearGradient>
            </defs>
            <path d="M52 108 L132 44 L212 108" fill="none" stroke="hsl(233 90% 57% / 0.35)" strokeWidth="1.5" strokeDasharray="4 4" className="animate-dash" style={{ strokeDashoffset: 40 }} />
            <path d="M132 44 L212 108 L288 70" fill="none" stroke="url(#heroEdge)" strokeWidth="1.5" />
            <path d="M92 76 L132 44" stroke="hsl(27 58% 45% / 0.7)" strokeWidth="1.5" strokeDasharray="3 3" />
            <circle cx="132" cy="44" r="13" fill="hsl(60 14% 97%)" stroke="hsl(233 90% 57%)" strokeWidth="1.5" />
            <circle cx="52" cy="108" r="9" fill="hsl(233 90% 57%)" />
            <circle cx="212" cy="108" r="9" fill="hsl(233 90% 57%)" />
            <circle cx="288" cy="70" r="7" fill="hsl(152 52% 34%)" />
            <circle cx="92" cy="76" r="6" fill="hsl(27 58% 45%)" />
            <text x="132" y="48" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="hsl(230 18% 10%)">AP</text>
            <g fontFamily="JetBrains Mono, monospace" fontSize="7.5" fill="hsl(230 7% 40%)">
              <text x="34" y="126">host</text>
              <text x="196" y="126">host</text>
              <text x="272" y="86">verify</text>
              <text x="72" y="92">risk</text>
            </g>
          </svg>
          <span className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-scan" aria-hidden />
        </div>

        <dl className="mt-5 space-y-2.5 text-sm">
          {[
            { k: "Focus", v: "Software · AI/ML · Security" },
            { k: "Stack", v: "Python · Java · C · SQL · Flask" },
            { k: "College", v: site.collegeShort },
            { k: "Graduating", v: site.graduation },
          ].map((row) => (
            <div key={row.k} className="flex items-baseline justify-between gap-4 border-b border-dashed border-border pb-2.5 last:border-none last:pb-0">
              <dt className="font-mono text-[11px] uppercase tracking-label text-mutedForeground">{row.k}</dt>
              <dd className="text-right font-medium text-foreground">{row.v}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="absolute -bottom-3 -right-2 hidden rotate-[-4deg] rounded-lg border border-border bg-card px-3 py-1.5 shadow-card sm:block">
        <span className="font-hand text-lg text-foreground">learning by building ✎</span>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-x-clip pb-[var(--dock-clearance)] pt-8 sm:pt-10">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid" aria-hidden />

      <div className="mx-auto w-full max-w-content px-5 sm:px-8">
        <header className="flex flex-wrap items-center justify-between gap-3">
          <Link to="/#top" className="flex items-center gap-2.5">
            <span className="grid h-7 w-7 place-items-center rounded-[6px] bg-foreground text-[11px] font-semibold text-background">
              AP
            </span>
            <span className="font-display text-sm font-semibold tracking-tight">{site.name}</span>
            <span className="hidden text-sm text-mutedForeground md:inline">· Information Technology student</span>
          </Link>
          <span className="label flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-signal animate-pulse-dot" />
            {site.location} · Graduating {site.graduation}
          </span>
        </header>

        <div className="grid items-center gap-12 pt-14 sm:pt-20 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:pt-24">
          <div>
            <div className="animate-fade-up">
              <span className="pill font-mono text-[10px] uppercase tracking-wider2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {site.degree} · {site.collegeShort}
              </span>
            </div>

            <h1
              className="mt-6 animate-fade-up font-display text-[3.1rem] font-semibold leading-[0.98] tracking-[-0.035em] text-balance sm:text-7xl xl:text-[5.2rem]"
              style={{ animationDelay: "80ms" }}
            >
              {site.name}
            </h1>

            <p
              className="mt-5 max-w-xl animate-fade-up font-display text-xl font-medium leading-snug tracking-tight text-pretty sm:text-2xl"
              style={{ animationDelay: "150ms" }}
            >
              {site.headline}
            </p>

            <p
              className="mt-5 max-w-xl animate-fade-up text-base leading-relaxed text-mutedForeground text-pretty sm:text-lg"
              style={{ animationDelay: "220ms" }}
            >
              {site.intro}
            </p>

            <div className="mt-8 flex animate-fade-up flex-wrap items-center gap-3" style={{ animationDelay: "300ms" }}>
              <Link to="/#work" className="btn-primary">
                View projects <ArrowDown className="h-4 w-4" />
              </Link>
              <Link to="/#about" className="btn-secondary">
                About me
              </Link>
              <Link to="/#contact" className="btn-secondary">
                Contact me
              </Link>
            </div>

            <div className="mt-5 flex animate-fade-up flex-wrap items-center gap-2" style={{ animationDelay: "360ms" }}>
              <a
                href={site.github}
                target="_blank"
                rel="noreferrer noopener"
                className="btn-ghost !px-3.5 !py-2.5 text-xs"
              >
                <Github className="h-4 w-4" /> GitHub <ArrowRight className="h-3.5 w-3.5" />
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="btn-ghost !px-3.5 !py-2.5 text-xs"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn <ArrowRight className="h-3.5 w-3.5" />
              </a>
              {site.resumeUrl ? (
                <a href={site.resumeUrl} download={site.resumeName} className="btn-ghost !px-3.5 !py-2.5 text-xs">
                  <FileText className="h-4 w-4" /> Resume
                </a>
              ) : (
                <button
                  type="button"
                  disabled
                  title="Add a resume PDF to enable this download"
                  className="btn-ghost !px-3.5 !py-2.5 text-xs opacity-60"
                >
                  <FileText className="h-4 w-4" /> Resume <span className="font-mono text-[10px]">(PDF needed)</span>
                </button>
              )}
              {site.email ? (
                <a href={`mailto:${site.email}`} className="btn-ghost !px-3.5 !py-2.5 text-xs">
                  <Mail className="h-4 w-4" /> Email
                </a>
              ) : null}
            </div>
          </div>

          <Reveal delay={120}>
            <HeroPanel />
          </Reveal>
        </div>

        <div className="mt-14 flex items-center gap-2 text-xs text-mutedForeground sm:mt-20">
          <MapPin className="h-3.5 w-3.5" />
          <span className="font-mono uppercase tracking-label">
            {site.focus.join("  /  ")}
          </span>
        </div>
      </div>
    </section>
  );
}
