import { GraduationCap, MapPin, Code2, ShieldCheck, Sparkles } from "lucide-react";
import { site } from "../data/site";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const facts = [
  { icon: GraduationCap, label: "Degree", value: site.degree },
  { icon: GraduationCap, label: "College", value: site.college },
  { icon: Sparkles, label: "Graduating", value: site.graduation },
  { icon: MapPin, label: "Location", value: site.location },
];

const interests = [
  { icon: Code2, title: "Software engineering", note: "Building applications end to end and learning good engineering habits." },
  { icon: Sparkles, title: "AI & machine learning", note: "Applied models, evaluation, and interactive ML interfaces." },
  { icon: ShieldCheck, title: "Cybersecurity", note: "Wireless security, network monitoring and defensive tooling." },
];

export function About() {
  return (
    <section id="about" className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto w-full max-w-content px-5 sm:px-8">
        <SectionHeading
          index="01"
          eyebrow="About"
          title={
            <>
              An engineering student who <span className="mark mark-anim">builds to learn</span>.
            </>
          }
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <Reveal className="space-y-5 text-base leading-relaxed text-mutedForeground text-pretty sm:text-lg">
            <p>
              I'm pursuing a <strong className="font-medium text-foreground">{site.degree}</strong> at{" "}
              <strong className="font-medium text-foreground">{site.collegeShort}</strong>, graduating in{" "}
              {site.graduation}. Most of what I know has come from building — small tools, web applications and
              course projects that made me figure things out as I went.
            </p>
            <p>
              I enjoy turning ideas into working applications and picking up whatever technology the problem needs.
              My interests sit in software engineering, artificial intelligence and machine learning, and
              cybersecurity — and I'm drawn to the places where they overlap.
            </p>
            <p>
              Right now my goal is straightforward: build strong engineering fundamentals and contribute to
              meaningful software projects, one honest iteration at a time.
            </p>

            <div className="grid gap-3 pt-2 sm:grid-cols-2">
              {interests.map((item) => (
                <div key={item.title} className="rounded-xl border border-border bg-card p-4 shadow-card">
                  <item.icon className="h-4 w-4 text-primary" />
                  <p className="mt-3 text-sm font-semibold text-foreground">{item.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-mutedForeground">{item.note}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="card overflow-hidden">
              <div className="border-b border-border bg-secondary/60 px-5 py-3">
                <span className="label">at a glance</span>
              </div>
              <dl className="divide-y divide-border">
                {facts.map((fact) => (
                  <div key={fact.label} className="flex items-start gap-3 px-5 py-4">
                    <fact.icon className="mt-0.5 h-4 w-4 shrink-0 text-mutedForeground" />
                    <dt className="w-20 shrink-0 font-mono text-[11px] uppercase tracking-label text-mutedForeground">
                      {fact.label}
                    </dt>
                    <dd className="text-sm font-medium text-foreground">{fact.value}</dd>
                  </div>
                ))}
              </dl>
              <div className="border-t border-dashed border-border px-5 py-4">
                <p className="font-hand text-xl text-foreground">
                  "Learn it by shipping it."
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
