import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type Props = {
  index: string;
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
};

export function SectionHeading({ index, eyebrow, title, description, align = "left" }: Props) {
  const centered = align === "center";
  return (
    <Reveal className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <div className={`flex items-center gap-3 ${centered ? "justify-center" : ""}`}>
        <span className="font-mono text-[11px] font-medium uppercase tracking-label text-primary">
          {index}
        </span>
        <span className="h-px w-6 bg-border" aria-hidden />
        <span className="label">{eyebrow}</span>
      </div>
      <h2 className="mt-4 font-display text-4xl font-bold leading-[1.04] tracking-[-0.03em] text-balance sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-relaxed text-mutedForeground text-pretty sm:text-lg">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
