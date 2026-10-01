import { Link } from "@tanstack/react-router";

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <Link
      to="/"
      aria-label="W Dental concept — home"
      className={`inline-flex items-baseline gap-2 font-display text-xl tracking-[0.02em] transition-opacity hover:opacity-70 ${className}`}
    >
      <span className="font-medium">W</span>
      <span aria-hidden="true" className="text-accent">
        |
      </span>
      <span className="text-[0.8em] uppercase tracking-[0.22em]">Dental</span>
    </Link>
  );
}
