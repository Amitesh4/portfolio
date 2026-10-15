import { Github, Linkedin, Mail, ArrowUpRight, Clock } from "lucide-react";
import { site } from "../data/site";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

type ContactRow = {
  label: string;
  value: string;
  href?: string;
  icon: typeof Github;
  pending?: boolean;
};

export function Contact() {
  const rows: ContactRow[] = [
    {
      label: "GitHub",
      value: "@Amitesh4",
      href: site.github,
      icon: Github,
    },
    {
      label: "LinkedIn",
      value: "p-amitesh",
      href: site.linkedin,
      icon: Linkedin,
    },
    site.email
      ? { label: "Email", value: site.email, href: `mailto:${site.email}`, icon: Mail }
      : { label: "Email", value: "Add an email address to enable", icon: Mail, pending: true },
  ];

  return (
    <section id="contact" className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto w-full max-w-content px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <SectionHeading
              index="05"
              eyebrow="Contact"
              title={
                <>
                  Let's build something <span className="mark mark-anim">useful together</span>.
                </>
              }
              description="I'm open to internships, software development opportunities, and project or research collaboration. If you're working on something in software, AI/ML or security — or you just want to compare notes — I'd be glad to hear from you."
            />
            <Reveal delay={120}>
              <p className="mt-6 max-w-lg text-sm leading-relaxed text-mutedForeground">
                The fastest way to reach me is LinkedIn or GitHub. There's no contact form here on purpose — a
                form that pretends to send messages isn't useful, so these are direct links instead.
              </p>
            </Reveal>
          </div>

          <Reveal delay={160}>
            <div className="card overflow-hidden">
              <div className="flex items-center justify-between border-b border-border bg-secondary/60 px-5 py-3">
                <span className="label">direct channels</span>
                <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-label text-mutedForeground">
                  <span className="h-1.5 w-1.5 rounded-full bg-signal animate-pulse-dot" /> responding
                </span>
              </div>

              <ul className="divide-y divide-border">
                {rows.map((row) => {
                  const Icon = row.icon;
                  const inner = (
                    <>
                      <span
                        className={`grid h-10 w-10 place-items-center rounded-xl border border-border ${
                          row.pending ? "text-border" : "bg-card text-foreground"
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="flex-1">
                        <span className="block font-mono text-[10px] uppercase tracking-label text-mutedForeground">
                          {row.label}
                        </span>
                        <span className={`block text-sm font-medium ${row.pending ? "text-mutedForeground" : "text-foreground"}`}>
                          {row.value}
                        </span>
                      </span>
                      {row.pending ? (
                        <Clock className="h-4 w-4 text-mutedForeground" />
                      ) : (
                        <ArrowUpRight className="h-4 w-4 text-mutedForeground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      )}
                    </>
                  );

                  return (
                    <li key={row.label}>
                      {row.href ? (
                        <a
                          href={row.href}
                          target={row.href.startsWith("http") ? "_blank" : undefined}
                          rel={row.href.startsWith("http") ? "noreferrer noopener" : undefined}
                          className="group flex items-center gap-4 px-5 py-4 transition-colors hover:bg-secondary/60"
                        >
                          {inner}
                        </a>
                      ) : (
                        <div
                          className="flex cursor-not-allowed items-center gap-4 px-5 py-4"
                          title="Add your email in src/data/site.ts to enable this"
                        >
                          {inner}
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>

              <div className="border-t border-border bg-secondary/40 px-5 py-4">
                <p className="text-xs leading-relaxed text-mutedForeground">
                  Based in {site.location}. Feel free to reach out about internships or collaboration.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
