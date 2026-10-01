import { Link, createFileRoute } from "@tanstack/react-router";

import { BookOnlineButton, BookingVerificationNote } from "@/components/site/BookOnlineButton";
import { Section, SectionHeading } from "@/components/site/Section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { PRACTICE } from "@/lib/site";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — W | Dental Concept Demo" },
      {
        name: "description",
        content:
          "Answers to common questions about appointments, location, contact and dental service categories for this W | Dental concept website.",
      },
      { property: "og:title", content: "FAQ — W | Dental Concept Demo" },
      {
        property: "og:description",
        content:
          "How to request an appointment, book online, find the office and reach the practice.",
      },
    ],
  }),
  component: Faq,
});

const FAQS = [
  {
    q: "How can I request an appointment?",
    a: "Use the appointment request on the Contact page, or call the office directly at (347) 230-4441. In this concept, the request form is a demonstration only — nothing is sent and no appointment is booked.",
  },
  {
    q: "Can I book online?",
    a: "Online booking is handled through the verified W Dental booking provider listing. In this concept the Book Online button is in place, but the destination must be verified and configured before launch.",
  },
  {
    q: "Where is W | Dental located?",
    a: "18–26 Cornaga Ave, Far Rockaway, NY 11691, United States. The Get Directions button opens the address in Google Maps.",
  },
  {
    q: "How can I contact the office?",
    a: "By phone at (347) 230-4441. No email address or social media account is shown here, because none was verified for this concept.",
  },
  {
    q: "What dental services are available?",
    a: "Publicly listed categories include general dental care, dental cleanings, dental consultations, cosmetic dental treatments, whitening, dental implants and emergency dental care.",
  },
  {
    q: "Do you accept my insurance?",
    a: "Insurance participation can vary by plan. Please contact the office or use the verified booking provider to confirm current coverage.",
  },
  {
    q: "What should I bring to my appointment?",
    a: "Generally, a form of photo identification and any insurance card you hold. The practice can confirm anything else needed for your visit.",
  },
];

function Faq() {
  return (
    <>
      <Section className="pb-6">
        <SectionHeading
          as="h1"
          eyebrow="FAQ"
          title="Questions, answered plainly."
          intro="General information only. This concept site does not provide medical advice."
        />
      </Section>

      <Section className="pt-0">
        <Accordion type="single" collapsible className="max-w-3xl">
          {FAQS.map((item, index) => (
            <AccordionItem key={item.q} value={`item-${index}`}>
              <AccordionTrigger className="py-5 text-left font-display text-lg hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-sm leading-relaxed text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <p className="mt-8 max-w-3xl text-xs leading-relaxed text-muted-foreground">
          {PRACTICE.hoursNotice}
        </p>
      </Section>

      <Section className="bg-secondary/40">
        <div className="flex flex-col items-start gap-5 md:flex-row md:items-center md:justify-between">
          <h2 className="max-w-md text-3xl">Still need to reach the practice?</h2>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="ink" size="xl">
              <Link to="/contact" hash="request">
                Request an Appointment
              </Link>
            </Button>
            <BookOnlineButton />
          </div>
        </div>
        <BookingVerificationNote className="mt-4" />
      </Section>
    </>
  );
}
