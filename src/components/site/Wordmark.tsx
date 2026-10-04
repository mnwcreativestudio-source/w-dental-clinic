import { Link } from "@tanstack/react-router";

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <Link
      to="/"
      aria-label="Premium Dental Clinic demo — home"
      className={`inline-flex items-baseline gap-2 font-display text-lg sm:text-xl tracking-[0.02em] transition-opacity hover:opacity-70 ${className}`}
    >
      <span className="font-medium tracking-tight">PREMIUM</span>
      <span aria-hidden="true" className="text-accent font-light">
        |
      </span>
      <span className="text-[0.78em] uppercase tracking-[0.18em] text-foreground/90">
        DENTAL CLINIC
      </span>
    </Link>
  );
}
