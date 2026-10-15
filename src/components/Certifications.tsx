import { Award, ShieldCheck, ArrowUpRight, Clock } from "lucide-react";
import { certifications } from "../data/certifications";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const icons = [Award, ShieldCheck];

export function Certifications() {
  return (
    <section id="certifications" className="border-t border-border bg-secondary/40 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-content px-5 sm:px-8">
        <SectionHeading
          index="04"
          eyebrow="Certifications"
          title={
            <>
              Cloud and security <span className="mark mark-anim">foundations</span>.
            </>
          }
          description="Formal coursework in cloud computing and cybersecurity. Verification links and credential IDs are added only when the exact details are available — none are invented."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {certifications.map((cert, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={cert.name} delay={i * 90}>
                <article className="card flex h-full flex-col p-6">
                  <div className="flex items-start justify-between gap-4">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="pill !py-1 font-mono text-[10px] uppercase tracking-label">{cert.category}</span>
                  </div>

                  <h3 className="mt-5 font-display text-xl font-semibold leading-snug tracking-tight">{cert.name}</h3>
                  <p className="mt-1 text-sm font-medium text-mutedForeground">{cert.issuer}</p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-mutedForeground">{cert.blurb}</p>

                  <div className="mt-6 border-t border-dashed border-border pt-4">
                    {cert.verifyUrl ? (
                      <a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-all hover:gap-2.5"
                      >
                        Verify credential <ArrowUpRight className="h-4 w-4" />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-xs text-mutedForeground">
                        <Clock className="h-3.5 w-3.5" /> Verification link not added yet
                      </span>
                    )}
                    {cert.credentialId ? (
                      <p className="mt-2 font-mono text-[11px] text-mutedForeground">ID · {cert.credentialId}</p>
                    ) : null}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
