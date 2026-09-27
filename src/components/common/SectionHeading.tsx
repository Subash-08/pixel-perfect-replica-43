import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  action?: ReactNode;
}

export function SectionHeading({ eyebrow, title, subtitle, align = "left", action }: SectionHeadingProps) {
  return (
    <div
      className={`mb-8 flex flex-col gap-4 md:mb-10 md:flex-row md:items-end md:justify-between ${
        align === "center" ? "text-center md:flex-col md:items-center md:text-center" : ""
      }`}
    >
      <div className={align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl"}>
        {eyebrow ? (
          <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">{eyebrow}</p>
        ) : null}
        <h2 className="font-display text-3xl leading-tight text-foreground md:text-[2.75rem]">{title}</h2>
        {subtitle ? <p className="mt-3 text-sm text-muted-foreground md:text-base">{subtitle}</p> : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
