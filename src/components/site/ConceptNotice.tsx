import { CONCEPT_NOTICE } from "@/lib/site";

export function ConceptNoticeBar() {
  return (
    <div className="w-full bg-notice text-notice-foreground">
      <p className="mx-auto max-w-6xl px-4 py-2.5 text-center text-[0.6875rem] font-medium leading-snug tracking-[0.12em] sm:text-xs sm:tracking-[0.16em]">
        {CONCEPT_NOTICE}
      </p>
    </div>
  );
}

export function ConceptNoticeInline({ className = "" }: { className?: string }) {
  return (
    <p
      className={`rounded-md border border-border bg-secondary/70 px-4 py-3 text-xs font-medium leading-relaxed tracking-[0.08em] text-muted-foreground ${className}`}
    >
      {CONCEPT_NOTICE}
    </p>
  );
}
