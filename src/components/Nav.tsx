import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Github, Linkedin, Mail, FileText, ArrowUp } from "lucide-react";
import { navLinks, site } from "../data/site";

const sectionIds = navLinks.map((l) => l.id);

function useActiveSection() {
  const [active, setActive] = useState<string>(sectionIds[0]);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      const marker = window.scrollY + window.innerHeight * 0.32;
      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= marker) current = id;
      }
      setActive(current);
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  return active;
}

function Monogram() {
  return (
    <span className="grid h-7 w-7 place-items-center rounded-[6px] bg-foreground text-[11px] font-semibold text-background">
      AP
    </span>
  );
}

export function Nav() {
  const active = useActiveSection();
  const { pathname } = useLocation();
  const onHome = pathname === "/";

  return (
    <nav
      aria-label="Primary"
      className="fixed inset-x-0 bottom-3 z-50 flex justify-center px-3 sm:bottom-5"
    >
      <div className="flex max-w-[calc(100vw-1.5rem)] items-center gap-1 overflow-x-auto rounded-2xl border border-border bg-card/95 p-1.5 shadow-dock backdrop-blur-xl [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <Link
          to="/#top"
          className="flex shrink-0 items-center gap-2 rounded-xl px-2.5 py-2 text-sm font-medium hover:bg-secondary"
          aria-label={`${site.name} — home`}
        >
          <Monogram />
        </Link>

        <span className="mx-1 hidden h-6 w-px shrink-0 bg-border sm:block" aria-hidden />

        <ul className="flex shrink-0 items-center gap-0.5">
          {navLinks.map((link) => {
            const isActive = onHome && active === link.id;
            return (
              <li key={link.id} className="shrink-0">
                <Link
                  to={`/#${link.id}`}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative block rounded-xl px-2.5 py-2 text-[11px] font-medium transition-all duration-200 sm:px-3 sm:text-xs ${
                    isActive
                      ? "scale-[1.02] bg-secondary text-foreground"
                      : "text-mutedForeground hover:scale-[1.02] hover:bg-secondary hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <span className="mx-1 hidden h-6 w-px shrink-0 bg-border md:block" aria-hidden />

        <div className="hidden shrink-0 items-center gap-0.5 md:flex">
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub profile"
            title="GitHub"
            className="grid h-9 w-9 place-items-center rounded-xl text-mutedForeground transition-all hover:-translate-y-0.5 hover:bg-secondary hover:text-foreground"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn profile"
            title="LinkedIn"
            className="grid h-9 w-9 place-items-center rounded-xl text-mutedForeground transition-all hover:-translate-y-0.5 hover:bg-secondary hover:text-foreground"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          {site.email ? (
            <a
              href={`mailto:${site.email}`}
              aria-label="Send email"
              title="Email"
              className="grid h-9 w-9 place-items-center rounded-xl text-mutedForeground transition-all hover:-translate-y-0.5 hover:bg-secondary hover:text-foreground"
            >
              <Mail className="h-4 w-4" />
            </a>
          ) : null}
          {site.resumeUrl ? (
            <a
              href={site.resumeUrl}
              download={site.resumeName}
              aria-label="Download resume"
              title="Resume"
              className="grid h-9 w-9 place-items-center rounded-xl text-mutedForeground transition-all hover:-translate-y-0.5 hover:bg-secondary hover:text-foreground"
            >
              <FileText className="h-4 w-4" />
            </a>
          ) : (
            <span
              title="Resume PDF not added yet"
              aria-hidden
              className="grid h-9 w-9 cursor-not-allowed place-items-center rounded-xl text-border"
            >
              <FileText className="h-4 w-4" />
            </span>
          )}
        </div>
      </div>
    </nav>
  );
}

export function BackToTop() {
  return (
    <a
      href="#top"
      className="inline-flex items-center gap-1.5 text-xs text-mutedForeground transition-colors hover:text-foreground"
    >
      <ArrowUp className="h-3.5 w-3.5" /> Back to top
    </a>
  );
}
