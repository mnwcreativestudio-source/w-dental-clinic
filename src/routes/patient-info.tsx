import { Link, createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, ShieldAlert } from "lucide-react";
import { toast } from "sonner";

import { BookOnlineButton, BookingVerificationNote } from "@/components/site/BookOnlineButton";
import { Section, SectionHeading } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { PRACTICE } from "@/lib/site";

export const Route = createFileRoute("/patient-info")({
  head: () => ({
    meta: [
      { title: "Patient Info — Premium Dental Clinic Concept Demo" },
      {
        name: "description",
        content:
          "General patient guidance for this Premium Dental Clinic concept website by MNW Creative Studio: before your visit, what to expect, and demonstration appointment pathways.",
      },
      { property: "og:title", content: "Patient Info — Premium Dental Clinic Concept Demo" },
      {
        property: "og:description",
        content:
          "General guidance on visiting a dental clinic and requesting an appointment, shown in a concept demo.",
      },
    ],
  }),
  component: PatientInfo,
});

const BLOCKS = [
  {
    heading: "Before Your Visit",
    items: [
      "Bring a form of photo identification and any dental insurance documentation you hold, so the front desk can review coverage with you directly.",
      "Allow time to complete any intake forms provided prior to or upon arrival at the office.",
      "If you need to reschedule or modify an appointment, contact the clinic directly.",
    ],
  },
  {
    heading: "What to Expect",
    items: [
      "You will be greeted at reception and guided through a calm, organized check-in process.",
      "Care options, diagnostic findings, and personalized treatment plans are discussed with our dental care team.",
      "Questions regarding personal medical or dental diagnoses should always be discussed with a licensed practitioner.",
    ],
  },
  {
    heading: "Appointment Requests",
    items: [
      "Appointment requests on this concept site are a demonstration only — nothing is sent and no appointment is booked.",
      "Demonstration contact line: +1 (000) 000-0000 / email: example@email.com.",
      "Online booking pathways can be connected directly to your practice management system in live deployment.",
    ],
  },
];

function PatientInfo() {
  return (
    <>
      <Section className="pb-8">
        <SectionHeading
          as="h1"
          eyebrow="Patient Info"
          title="General information for your visit."
          intro="The guidance below is representative and does not constitute medical advice. Please consult a licensed dental professional for specific medical questions."
        />
      </Section>

      <Section className="pt-0">
        <div className="grid gap-5 lg:grid-cols-3">
          {BLOCKS.map((block) => (
            <article
              key={block.heading}
              className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)]"
            >
              <h2 className="text-xl">{block.heading}</h2>
              <ul className="mt-4 flex flex-col gap-3">
                {block.items.map((item) => (
                  <li
                    key={item}
                    className="border-l border-border pl-4 text-sm leading-relaxed text-muted-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-6 flex items-start gap-3 rounded-xl border border-border bg-secondary/70 p-5">
          <ShieldAlert aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-accent" />
          <p className="text-sm leading-relaxed text-muted-foreground">
            For privacy and security, please do not submit medical or other sensitive health
            information through this demo form.
          </p>
        </div>
      </Section>

      <Section className="bg-secondary/40">
        <SectionHeading eyebrow="Contact information" title="Reaching the office." />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <article className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
            <Phone aria-hidden="true" className="size-5 text-accent" />
            <h3 className="mt-4 text-lg">By phone</h3>
            <p className="mt-2 text-sm text-muted-foreground">{PRACTICE.phoneDisplay}</p>
            <Button asChild variant="quiet" size="default" className="mt-5">
              <a
                href={PRACTICE.phoneHref}
                onClick={(e) => {
                  e.preventDefault();
                  toast("Demo Phone Number", {
                    description:
                      "+1 (000) 000-0000 is a simulated contact number for this MNW Creative Studio portfolio demo.",
                  });
                }}
              >
                Call the Office
              </a>
            </Button>
          </article>
          <article className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
            <MapPin aria-hidden="true" className="size-5 text-accent" />
            <h3 className="mt-4 text-lg">In person</h3>
            <address className="mt-2 text-sm not-italic leading-relaxed text-muted-foreground">
              {PRACTICE.addressLine}
              <br />
              {PRACTICE.addressCity}
            </address>
            <Button asChild variant="quiet" size="default" className="mt-5">
              <a
                href={PRACTICE.mapsHref}
                onClick={(e) => {
                  e.preventDefault();
                  toast("Demo Location", {
                    description:
                      "Clinic address is a placeholder for this MNW Creative Studio portfolio demo.",
                  });
                }}
              >
                Get Directions
              </a>
            </Button>
          </article>
        </div>
        <p className="mt-6 text-xs text-muted-foreground">{PRACTICE.hoursNotice}</p>
      </Section>

      <Section>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild variant="ink" size="xl">
            <Link to="/contact" hash="request">
              Request an Appointment
            </Link>
          </Button>
          <BookOnlineButton />
        </div>
        <BookingVerificationNote className="mt-4" />
      </Section>
    </>
  );
}
