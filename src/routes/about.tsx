import { Link, createFileRoute } from "@tanstack/react-router";

import galleryWaiting from "@/assets/gallery-waiting.jpg";
import { ConceptNoticeInline } from "@/components/site/ConceptNotice";
import { Section, SectionHeading } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { PRACTICE } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — W | Dental Concept Demo" },
      {
        name: "description",
        content:
          "About this concept website for W | Dental in Far Rockaway, New York, including the publicly listed provider Dr. Walishah Ahmadi, DDS.",
      },
      { property: "og:title", content: "About — W | Dental Concept Demo" },
      {
        property: "og:description",
        content:
          "A concept website exploring clear information, simple communication and convenient appointment pathways.",
      },
    ],
  }),
  component: About,
});

const PRINCIPLES = [
  {
    title: "Accessible information",
    copy: "Service categories, location and contact details presented plainly, without clutter.",
  },
  {
    title: "Clear communication",
    copy: "Straightforward language and an obvious next step on every page.",
  },
  {
    title: "Convenient appointment pathways",
    copy: "A request form, a direct phone line and a place for verified online booking.",
  },
  {
    title: "A welcoming experience",
    copy: "A calm, unhurried visual tone appropriate to a dental practice.",
  },
];

function About() {
  return (
    <>
      <Section className="pb-8">
        <SectionHeading
          as="h1"
          eyebrow="About"
          title="A website concept for W | Dental."
          intro={`${PRACTICE.name} is located in ${PRACTICE.city}. This concept demonstrates how the practice's information could be presented online — it is not an official website and contains no invented details about the practice.`}
        />
      </Section>

      <Section className="pt-0">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <figure>
            <img
              src={galleryWaiting}
              alt="Quiet, minimal waiting area with a linen bench and soft natural light"
              loading="lazy"
              width={1200}
              height={912}
              className="w-full rounded-xl border border-border object-cover shadow-[var(--shadow-card)]"
            />
            <figcaption className="mt-3 text-xs text-muted-foreground">
              Concept imagery — not photographs of W | Dental.
            </figcaption>
          </figure>
          <div className="grid gap-7 sm:grid-cols-2">
            {PRINCIPLES.map((item) => (
              <div key={item.title}>
                <h2 className="text-lg">{item.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-secondary/40">
        <SectionHeading eyebrow="Provider" title="Dr. Walishah Ahmadi, DDS" />
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Dr. Walishah Ahmadi, DDS is the publicly listed provider for {PRACTICE.name} in{" "}
          {PRACTICE.city}. No further biographical information is shown in this concept, because
          only verified, publicly listed details are used.
        </p>
        <ConceptNoticeInline className="mt-8 max-w-2xl" />
      </Section>

      <Section>
        <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
          <Button asChild variant="ink" size="xl">
            <Link to="/contact" hash="request">
              Request an Appointment
            </Link>
          </Button>
          <Button asChild variant="quiet" size="xl">
            <Link to="/services">View Services</Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
