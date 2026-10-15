import { skillGroups } from "../data/skills";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Skills() {
  return (
    <section id="skills" className="border-t border-border bg-secondary/40 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-content px-5 sm:px-8">
        <SectionHeading
          index="02"
          eyebrow="Skills"
          title={
            <>
              Tools I reach for, and <span className="mark mark-anim">what I use them for</span>.
            </>
          }
          description="No proficiency bars or invented ratings — just the languages, tools and areas I actually work with."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.category} delay={gi * 70}>
              <div className="card h-full p-6">
                <div className="flex items-center gap-3">
                  <span className="grid h-7 w-7 place-items-center rounded-lg bg-primary/10 font-mono text-[11px] font-medium text-primary">
                    {String(gi + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-lg font-semibold tracking-tight">{group.category}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-mutedForeground">{group.blurb}</p>

                <ul className="mt-4 divide-y divide-border border-t border-border">
                  {group.items.map((item) => (
                    <li key={item.name} className="flex flex-col gap-0.5 py-3">
                      <span className="text-sm font-medium text-foreground">{item.name}</span>
                      <span className="text-xs leading-relaxed text-mutedForeground">{item.note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
