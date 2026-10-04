import { ExternalLink } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";

type Props = {
  size?: "default" | "lg" | "xl";
  variant?: "ink" | "sage" | "quiet" | "outline";
  className?: string;
};

export function BookOnlineButton({ size = "xl", variant = "quiet", className = "" }: Props) {
  return (
    <Button
      size={size}
      variant={variant}
      className={className}
      onClick={() =>
        toast("Portfolio Demo Only", {
          description:
            "This concept website is created by MNW Creative Studio. Online booking pathways are simulated for demonstration purposes.",
        })
      }
    >
      Book Online
      <ExternalLink aria-hidden="true" />
    </Button>
  );
}

export function BookingVerificationNote({ className = "" }: { className?: string }) {
  return (
    <p className={`text-xs leading-relaxed text-muted-foreground ${className}`}>
      Simulated booking pathway — ready for integration with practice scheduling systems.
    </p>
  );
}
