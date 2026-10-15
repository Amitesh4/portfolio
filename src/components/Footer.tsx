import { Link } from "react-router-dom";
import { Github, Linkedin } from "lucide-react";
import { navLinks, site } from "../data/site";
import { BackToTop } from "./Nav";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border pb-[var(--dock-clearance)] pt-12">
      <div className="mx-auto w-full max-w-content px-5 sm:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Link to="/#top" className="flex items-center gap-2.5">
              <span className="grid h-7 w-7 place-items-center rounded-[6px] bg-foreground text-[11px] font-semibold text-background">
                AP
              </span>
              <span className="font-display text-sm font-semibold tracking-tight">{site.name}</span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-mutedForeground">
              {site.degree} · {site.collegeShort}. Building across software, AI/ML and cybersecurity.
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={`/#${link.id}`}
                className="text-sm text-mutedForeground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub"
              className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-card transition-all hover:-translate-y-0.5 hover:border-foreground/30"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn"
              className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-card transition-all hover:-translate-y-0.5 hover:border-foreground/30"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 sm:flex-row sm:items-center">
          <p className="font-mono text-[11px] uppercase tracking-label text-mutedForeground">
            © {year} {site.name} · All rights reserved
          </p>
          <BackToTop />
        </div>
      </div>
    </footer>
  );
}
