import { Link } from "@tanstack/react-router";
import { Clock, MapPin, Phone, ShieldCheck } from "lucide-react";

import { ConceptNoticeInline } from "@/components/site/ConceptNotice";
import { Wordmark } from "@/components/site/Wordmark";
import { Button } from "@/components/ui/button";
import { LEGAL_LINKS, NAV_LINKS, PRACTICE } from "@/lib/site";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-border bg-secondary/50">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        {/* 4-Column Main Footer Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Practice Info */}
          <div>
            <Wordmark />
            <p className="mt-3 text-sm font-medium text-foreground">{PRACTICE.provider}</p>
            <p className="text-xs text-muted-foreground">{PRACTICE.city}</p>

            <address className="mt-4 flex items-start gap-2 text-sm not-italic leading-relaxed text-muted-foreground">
              <MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-accent" />
              <span>
                {PRACTICE.addressLine}
                <br />
                {PRACTICE.addressCity}
              </span>
            </address>

            <div className="mt-4 flex flex-col gap-2">
              <a
                href={PRACTICE.phoneHref}
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground underline-offset-4 hover:underline"
              >
                <Phone aria-hidden="true" className="size-3.5 text-accent" />
                <span>{PRACTICE.phoneDisplay}</span>
              </a>
              <a
                href={PRACTICE.mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-accent underline underline-offset-4 hover:opacity-80"
              >
                Get Directions (Google Maps)
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <nav aria-label="Footer Navigation">
            <h2 className="eyebrow">Explore</h2>
            <ul className="mt-4 flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 3: Legal & Policies */}
          <nav aria-label="Legal and Compliance">
            <h2 className="eyebrow">Legal & Policies</h2>
            <ul className="mt-4 flex flex-col gap-2.5">
              {LEGAL_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <ShieldCheck aria-hidden="true" className="size-3 text-accent/70" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-5 rounded-lg border border-border bg-card/60 p-3 text-[0.6875rem] leading-relaxed text-muted-foreground">
              <span>
                All policies comply with HIPAA, ADA Title III, and healthcare privacy standards.
              </span>
            </div>
          </nav>

          {/* Column 4: Appointments & Hours */}
          <div>
            <h2 className="eyebrow">Appointments</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Start a concept appointment request or call the clinic directly.
            </p>
            <Button asChild variant="ink" size="xl" className="mt-4 w-full">
              <Link to="/contact" hash="request">
                Request an Appointment
              </Link>
            </Button>
            <div className="mt-4 flex items-start gap-2 rounded-lg border border-border bg-card/60 p-3 text-xs leading-relaxed text-muted-foreground">
              <Clock aria-hidden="true" className="mt-0.5 size-3.5 shrink-0 text-accent" />
              <div>
                <span className="block font-semibold text-foreground">Clinic Hours</span>
                <span>{PRACTICE.hoursNotice}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer Ribbon */}
        <ConceptNoticeInline className="mt-12 text-center" />

        {/* Bottom Copyright & Medical Disclaimer */}
        <div className="mt-8 border-t border-border pt-6 text-center text-xs leading-relaxed text-muted-foreground space-y-2">
          <p>
            © {currentYear} {PRACTICE.name}. All rights reserved. Concept design by MNW Creative
            Studio. Imagery is generic concept imagery and is not photographs of W | Dental.
          </p>
          <p className="text-[0.6875rem] opacity-80">
            Medical Disclaimer: Content on this concept website is for informational and
            demonstrative purposes only and does not constitute medical, clinical, or dental advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
