import type { ReactNode } from "react";

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-32 px-4 py-12 sm:px-6 sm:py-14 lg:py-16 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  as = "h2",
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  as?: "h1" | "h2";
  align?: "left" | "center";
}) {
  const Tag = as;
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <Tag className="mt-3 text-balance text-3xl leading-[1.12] sm:text-4xl md:text-[2.75rem]">
        {title}
      </Tag>
      {intro ? (
        <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">{intro}</p>
      ) : null}
    </div>
  );
}
