import { ExternalLink } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { ZOCDOC_URL } from "@/lib/site";

type Props = {
  size?: "default" | "lg" | "xl";
  variant?: "ink" | "sage" | "quiet" | "outline";
  className?: string;
};

export function BookOnlineButton({ size = "xl", variant = "quiet", className = "" }: Props) {
  if (ZOCDOC_URL) {
    return (
      <Button asChild size={size} variant={variant} className={className}>
        <a href={ZOCDOC_URL} target="_blank" rel="noopener noreferrer">
          Book Online
          <ExternalLink aria-hidden="true" />
          <span className="sr-only">(opens the verified booking provider in a new tab)</span>
        </a>
      </Button>
    );
  }

  return (
    <Button
      size={size}
      variant={variant}
      className={className}
      onClick={() =>
        toast("Booking destination not configured", {
          description:
            "In this concept, the Book Online button is reserved for the verified W Dental Zocdoc listing. The destination must be verified and configured before launch.",
        })
      }
    >
      Book Online
      <ExternalLink aria-hidden="true" />
    </Button>
  );
}

export function BookingVerificationNote({ className = "" }: { className?: string }) {
  if (ZOCDOC_URL) return null;
  return (
    <p className={`text-xs leading-relaxed text-muted-foreground ${className}`}>
      External booking destination requires final verification before launch.
    </p>
  );
}
