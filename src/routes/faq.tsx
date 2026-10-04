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
      { title: "FAQ — Premium Dental Clinic Concept Demo" },
      {
        name: "description",
        content:
          "Answers to common questions about appointments, location, contact and dental service categories for this Premium Dental Clinic concept website.",
      },
      { property: "og:title", content: "FAQ — Premium Dental Clinic Concept Demo" },
      {
        property: "og:description",
        content:
          "How to request an appointment, book online, find the office and reach the clinic.",
      },
    ],
  }),
  component: Faq,
});

const FAQS = [
  {
    q: "How can I request an appointment?",
    a: "Use the demonstration appointment request on the Contact page, or call our demo line at +1 (000) 000-0000. In this concept portfolio demo, the request form is for demonstration purposes only — nothing is sent and no real appointment is booked.",
  },
  {
    q: "Can I book online?",
    a: "In a production environment, online booking can connect directly to your clinic management system or patient portal. In this concept portfolio demo by MNW Creative Studio, online booking interactions are simulated.",
  },
  {
    q: "Where is Premium Dental Clinic located?",
    a: "Clinic Address, Location. The Get Directions button demonstrates integration with map and navigation services.",
  },
  {
    q: "How can I contact the office?",
    a: "By phone at +1 (000) 000-0000 or by email at example@email.com. This portfolio demo showcases clean communication channels without collecting or transmitting real patient information.",
  },
  {
    q: "What dental services are available?",
    a: "Representative categories include general dental care, dental cleanings, dental consultations, cosmetic dental treatments, teeth whitening, dental implants and emergency dental care.",
  },
  {
    q: "Do you accept my insurance?",
    a: "In a production clinic deployment, accepted insurance plans and payment options are customized to your practice. Please contact your coverage provider to verify benefits.",
  },
  {
    q: "What should I bring to my appointment?",
    a: "Generally, a valid photo identification and any dental insurance information you hold. The clinic staff will guide you through any necessary intake details.",
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
          <h2 className="max-w-md text-3xl">Still have questions about our clinic demo?</h2>
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
