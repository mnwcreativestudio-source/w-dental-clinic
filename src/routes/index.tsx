import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, CalendarCheck, MapPin, Phone } from "lucide-react";

import heroImage from "@/assets/hero-clinic.jpg";
import galleryTreatment from "@/assets/gallery-treatment.jpg";
import galleryWaiting from "@/assets/gallery-waiting.jpg";
import galleryDetail from "@/assets/gallery-detail.jpg";
import { BookOnlineButton, BookingVerificationNote } from "@/components/site/BookOnlineButton";
import { Section, SectionHeading } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { PRACTICE } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "W | Dental — Dental Care in Far Rockaway, NY | Concept Demo" },
      {
        name: "description",
        content:
          "Concept website for W | Dental in Far Rockaway, NY, showcasing a modern dental website experience with services, contact information and appointment pathways.",
      },
      { property: "og:title", content: "W | Dental — Concept Website Demo" },
      {
        property: "og:description",
        content:
          "A modern dental website concept for W | Dental in Far Rockaway, NY. Demo only — not affiliated with W | Dental.",
      },
    ],
  }),
  component: Home,
});

const CARE_AREAS = [
  {
    title: "General Dental Care",
    copy: "Everyday dental care coordinated through the practice.",
  },
  {
    title: "Preventive Care",
    copy: "Cleanings and consultations that support ongoing oral health.",
  },
  {
    title: "Cosmetic Treatments",
    copy: "Listed cosmetic dental care categories, including whitening.",
  },
  {
    title: "Restorative Care",
    copy: "Listed restorative categories, including dental implants.",
  },
];

function Home() {
  return (
    <>
      <section className="px-4 pt-12 sm:px-6 sm:pt-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <div>
            <p className="eyebrow">{PRACTICE.city}</p>
            <h1 className="mt-4 text-balance text-4xl leading-[1.08] sm:text-5xl md:text-6xl">
              Modern Dental Care, Designed Around You.
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              A clean, welcoming dental experience concept designed to make finding care,
              understanding services and requesting an appointment simple.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button asChild variant="ink" size="xl">
                <Link to="/contact" hash="request">
                  Request an Appointment
                </Link>
              </Button>
              <Button asChild variant="quiet" size="xl">
                <a href={PRACTICE.phoneHref}>
                  <Phone aria-hidden="true" />
                  Call {PRACTICE.phoneDisplay}
                </a>
              </Button>
            </div>
            <Link
              to="/services"
              className="mt-7 inline-flex items-center gap-2 text-sm text-foreground underline-offset-4 transition-colors hover:text-accent hover:underline"
            >
              View Services
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </div>

          <figure className="relative">
            <img
              src={heroImage}
              alt="Calm, modern dental clinic reception area with warm wood and soft daylight"
              width={1600}
              height={1200}
              className="w-full rounded-xl border border-border object-cover shadow-[var(--shadow-lift)]"
            />
            <figcaption className="mt-3 text-xs text-muted-foreground">
              Concept imagery — for demonstration purposes.
            </figcaption>
          </figure>
        </div>
      </section>

      <Section>
        <div className="h-px w-full rule-line" />
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {CARE_AREAS.map((area) => (
            <div key={area.title}>
              <h2 className="text-xl">{area.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{area.copy}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-xs leading-relaxed text-muted-foreground">
          Service categories shown are those publicly listed for the practice. No pricing,
          availability or outcome claims are made in this concept.
        </p>
      </Section>

      <Section className="bg-secondary/40">
        <SectionHeading
          eyebrow="Quick actions"
          title="Everything a patient needs, one step away."
          intro="The pathways a real practice site would use — appointment requests, phone, directions and verified online booking."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <article className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[var(--shadow-lift)]">
            <CalendarCheck aria-hidden="true" className="size-5 text-accent" />
            <h3 className="mt-4 text-lg">Request an Appointment</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
              Start an appointment request or visit the verified online booking option.
            </p>
            <Button asChild variant="ink" size="default" className="mt-5">
              <Link to="/contact" hash="request">
                Start request
              </Link>
            </Button>
          </article>

          <article className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[var(--shadow-lift)]">
            <Phone aria-hidden="true" className="size-5 text-accent" />
            <h3 className="mt-4 text-lg">Call the Office</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
              {PRACTICE.phoneDisplay}
            </p>
            <Button asChild variant="quiet" size="default" className="mt-5">
              <a href={PRACTICE.phoneHref}>Call now</a>
            </Button>
          </article>

          <article className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[var(--shadow-lift)]">
            <MapPin aria-hidden="true" className="size-5 text-accent" />
            <h3 className="mt-4 text-lg">Find the Office</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
              {PRACTICE.addressLine}
              <br />
              {PRACTICE.addressCity}
            </p>
            <Button asChild variant="quiet" size="default" className="mt-5">
              <a href={PRACTICE.mapsHref} target="_blank" rel="noopener noreferrer">
                Get Directions
              </a>
            </Button>
          </article>

          <article className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[var(--shadow-lift)]">
            <ArrowRight aria-hidden="true" className="size-5 text-accent" />
            <h3 className="mt-4 text-lg">Online Booking</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
              Reserved for the verified W Dental Zocdoc listing as the external booking destination.
            </p>
            <BookOnlineButton size="default" variant="quiet" className="mt-5" />
            <BookingVerificationNote className="mt-3" />
          </article>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Gallery"
          title="A calm, considered clinic environment."
          intro="Concept imagery — not photographs of W | Dental."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              src: galleryTreatment,
              alt: "Minimalist dental treatment room with pale wood cabinetry and daylight",
            },
            {
              src: galleryWaiting,
              alt: "Quiet waiting area with a linen bench, plant and soft daylight",
            },
            {
              src: galleryDetail,
              alt: "Neatly arranged sterile dental instruments on a clean tray",
            },
          ].map((image) => (
            <figure key={image.alt} className="overflow-hidden rounded-xl border border-border">
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                width={1200}
                height={912}
                className="aspect-4/3 w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
              />
            </figure>
          ))}
        </div>
        <p className="mt-5 text-xs text-muted-foreground">
          Concept imagery — not photographs of W | Dental.
        </p>
      </Section>

      <Section className="pb-4">
        <div className="rounded-2xl border border-border bg-card px-6 py-12 text-center shadow-[var(--shadow-card)] sm:px-12">
          <h2 className="text-balance text-3xl sm:text-4xl">Ready to see the request flow?</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
            The appointment request in this concept is a demonstration only. Nothing is sent and no
            appointment is booked.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild variant="ink" size="xl">
              <Link to="/contact" hash="request">
                Request an Appointment
              </Link>
            </Button>
            <BookOnlineButton />
          </div>
          <BookingVerificationNote className="mt-4" />
        </div>
      </Section>
    </>
  );
}
