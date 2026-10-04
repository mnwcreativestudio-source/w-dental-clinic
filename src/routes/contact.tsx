import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";

import { AppointmentForm } from "@/components/site/AppointmentForm";
import { BookOnlineButton, BookingVerificationNote } from "@/components/site/BookOnlineButton";
import { ConceptNoticeInline } from "@/components/site/ConceptNotice";
import { Section, SectionHeading } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { PRACTICE } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Premium Dental Clinic Concept Demo" },
      {
        name: "description",
        content:
          "Demonstration contact details and simulated appointment request for the Premium Dental Clinic concept website by MNW Creative Studio.",
      },
      { property: "og:title", content: "Contact — Premium Dental Clinic Concept Demo" },
      {
        property: "og:description",
        content:
          "Explore demo contact channels, location placeholders, and demonstration appointment request.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <Section className="pb-8">
        <SectionHeading
          as="h1"
          eyebrow="Contact"
          title="Get in touch with the clinic."
          intro="Demonstration contact details for Premium Dental Clinic, plus an interactive concept appointment request."
        />
      </Section>

      <Section className="pt-0">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="text-2xl">{PRACTICE.name}</h2>
            <address className="mt-4 text-sm not-italic leading-relaxed text-muted-foreground">
              {PRACTICE.addressLine}
              <br />
              {PRACTICE.addressCity}
            </address>

            <div className="mt-4 flex flex-col gap-1.5 text-sm">
              <a
                href={PRACTICE.phoneHref}
                onClick={(e) => {
                  e.preventDefault();
                  toast("Demo Phone Number", {
                    description:
                      "+1 (000) 000-0000 is a simulated contact number for this MNW Creative Studio portfolio demo.",
                  });
                }}
                className="inline-flex items-center gap-2 text-foreground underline-offset-4 hover:underline"
              >
                <Phone aria-hidden="true" className="size-3.5 text-accent" />
                <span>{PRACTICE.phoneDisplay}</span>
              </a>

              <a
                href={PRACTICE.emailHref}
                onClick={(e) => {
                  e.preventDefault();
                  toast("Demo Email Address", {
                    description:
                      "example@email.com is a simulated email address for this MNW Creative Studio portfolio demo.",
                  });
                }}
                className="inline-flex items-center gap-2 text-foreground underline-offset-4 hover:underline"
              >
                <Mail aria-hidden="true" className="size-3.5 text-accent" />
                <span>{PRACTICE.email}</span>
              </a>
            </div>

            <div className="mt-7 flex flex-col gap-3">
              <Button asChild variant="ink" size="xl">
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
                  <Phone aria-hidden="true" />
                  Call the Office
                </a>
              </Button>
              <Button asChild variant="quiet" size="xl">
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
                  <MapPin aria-hidden="true" />
                  Get Directions
                </a>
              </Button>
              <Button asChild variant="quiet" size="xl">
                <a href="#request">Request an Appointment</a>
              </Button>
              <BookOnlineButton />
              <BookingVerificationNote />
            </div>

            <p className="mt-7 text-xs leading-relaxed text-muted-foreground">
              {PRACTICE.hoursNotice}
            </p>
            <ConceptNoticeInline className="mt-6" />
          </div>

          <div id="request" className="scroll-mt-36">
            <h2 className="text-2xl">Request an Appointment</h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
              A demonstration of how an appointment request could work. No availability is shown and
              no appointment is booked.
            </p>
            <div className="mt-6">
              <AppointmentForm />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
