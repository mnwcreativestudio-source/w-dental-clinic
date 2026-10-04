import { Link, createFileRoute } from "@tanstack/react-router";
import {
  Anchor,
  Gem,
  MessagesSquare,
  Siren,
  Sparkles,
  Stethoscope,
  Sun,
  type LucideIcon,
} from "lucide-react";

import { BookOnlineButton, BookingVerificationNote } from "@/components/site/BookOnlineButton";
import { Section, SectionHeading } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/lib/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Premium Dental Clinic Concept Demo" },
      {
        name: "description",
        content:
          "Representative dental service categories presented in a concept clinic website demo by MNW Creative Studio.",
      },
      { property: "og:title", content: "Services — Premium Dental Clinic Concept Demo" },
      {
        property: "og:description",
        content:
          "General care, cleanings, consultations, cosmetic treatments, whitening, implants and emergency dental care.",
      },
    ],
  }),
  component: Services,
});

const ICONS: Record<string, LucideIcon> = {
  stethoscope: Stethoscope,
  sparkles: Sparkles,
  messages: MessagesSquare,
  gem: Gem,
  sun: Sun,
  anchor: Anchor,
  siren: Siren,
};

function Services() {
  return (
    <>
      <Section className="pb-8">
        <SectionHeading
          as="h1"
          eyebrow="Services"
          title="Comprehensive dental care categories."
          intro="The categories below reflect services typical of a modern premium dental practice. Descriptions are general and informational for demonstration purposes."
        />
      </Section>

      <Section className="pt-0">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = ICONS[service.icon] ?? Stethoscope;
            return (
              <article
                key={service.slug}
                className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[var(--shadow-lift)]"
              >
                <Icon aria-hidden="true" className="size-5 text-accent" />
                <h2 className="mt-4 text-xl">{service.title}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <Button asChild variant="quiet" size="default" className="mt-6 self-start">
                  <Link to="/contact" hash="request">
                    Request an Appointment
                  </Link>
                </Button>
              </article>
            );
          })}
        </div>

        <p className="mt-10 max-w-3xl text-xs leading-relaxed text-muted-foreground">
          This concept does not provide medical advice, treatment recommendations or outcome
          information. Please speak with a licensed dental practitioner about your individual care.
        </p>
      </Section>

      <Section className="bg-secondary/40">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h2 className="text-3xl">Questions about a service?</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Start a concept appointment request, or explore our simulated online scheduling pathways.
            </p>
            <BookingVerificationNote className="mt-3" />
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="ink" size="xl">
              <Link to="/contact" hash="request">
                Request an Appointment
              </Link>
            </Button>
            <BookOnlineButton />
          </div>
        </div>
      </Section>
    </>
  );
}
