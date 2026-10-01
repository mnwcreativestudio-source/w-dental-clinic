import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone } from "lucide-react";

import { AppointmentForm } from "@/components/site/AppointmentForm";
import { BookOnlineButton, BookingVerificationNote } from "@/components/site/BookOnlineButton";
import { ConceptNoticeInline } from "@/components/site/ConceptNotice";
import { Section, SectionHeading } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { PRACTICE } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — W | Dental Concept Demo" },
      {
        name: "description",
        content:
          "Contact details and a demonstration appointment request for the W | Dental concept website in Far Rockaway, NY.",
      },
      { property: "og:title", content: "Contact — W | Dental Concept Demo" },
      {
        property: "og:description",
        content:
          "Call the office, get directions to 18–26 Cornaga Ave, or try the concept appointment request.",
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
          title="Get in touch with the practice."
          intro="Verified contact details for W | Dental, plus a demonstration appointment request."
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
              <br />
              {PRACTICE.country}
            </address>
            <a
              href={PRACTICE.phoneHref}
              className="mt-4 inline-block text-base text-foreground underline-offset-4 hover:underline"
            >
              {PRACTICE.phoneDisplay}
            </a>

            <div className="mt-7 flex flex-col gap-3">
              <Button asChild variant="ink" size="xl">
                <a href={PRACTICE.phoneHref}>
                  <Phone aria-hidden="true" />
                  Call the Office
                </a>
              </Button>
              <Button asChild variant="quiet" size="xl">
                <a href={PRACTICE.mapsHref} target="_blank" rel="noopener noreferrer">
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
