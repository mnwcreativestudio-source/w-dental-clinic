import { Link, createFileRoute } from "@tanstack/react-router";
import { AlertCircle, ArrowLeft, FileText } from "lucide-react";

import { ConceptNoticeInline } from "@/components/site/ConceptNotice";
import { Section, SectionHeading } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { PRACTICE } from "@/lib/site";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — W | Dental" },
      {
        name: "description",
        content:
          "Terms of Service for the W | Dental website, including medical disclaimers, appointment policies, and acceptable website use.",
      },
      { property: "og:title", content: "Terms of Service — W | Dental" },
    ],
  }),
  component: TermsOfService,
});

function TermsOfService() {
  return (
    <>
      <Section className="pb-8">
        <div className="mb-6">
          <Button asChild variant="quiet" size="sm">
            <Link to="/">
              <ArrowLeft aria-hidden="true" className="mr-1 size-3.5" />
              Back to Home
            </Link>
          </Button>
        </div>

        <SectionHeading
          as="h1"
          eyebrow="Legal & Terms"
          title="Terms of Service"
          intro={`Please review these Terms of Service before using the ${PRACTICE.name} website. Last updated: September 2026.`}
        />
      </Section>

      <Section className="pt-0">
        <div className="mx-auto max-w-3xl space-y-10 text-sm leading-relaxed text-muted-foreground">
          <div className="rounded-xl border border-destructive/20 bg-destructive/5 p-6 text-foreground">
            <div className="flex items-center gap-2 font-semibold text-destructive">
              <AlertCircle aria-hidden="true" className="size-5" />
              <span>Medical Emergency Disclaimer</span>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              This website is not monitored for emergency medical or dental communications. If you
              are experiencing a life-threatening medical emergency or severe dental trauma, call{" "}
              <strong>911</strong> immediately or visit the nearest emergency room.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-medium text-foreground">1. Acceptance of Terms</h2>
            <p>
              By accessing or using this website, you acknowledge that you have read, understood,
              and agreed to be bound by these Terms of Service and our Privacy Policy. If you do not
              agree to these terms, please discontinue use of this website.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-medium text-foreground">
              2. Informational Purpose — No Medical Advice
            </h2>
            <p>
              All materials, service categories, descriptions, and informational content published
              on this website are provided strictly for general educational and informational
              purposes.{" "}
              <strong>
                Nothing contained on this site is intended to serve as medical advice, clinical
                diagnosis, or treatment recommendations.
              </strong>
            </p>
            <p>
              Oral health conditions vary by individual. Always consult directly with a licensed
              dentist or healthcare provider regarding questions or concerns about your specific
              health needs.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-medium text-foreground">
              3. Appointment Requests & Demo Notice
            </h2>
            <p>
              Submission of an appointment request via this concept website does not create a
              doctor-patient relationship, nor does it guarantee an appointment reservation. All
              clinical appointments must be confirmed directly with practice staff by telephone or
              through verified booking channels.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-medium text-foreground">4. Acceptable Website Use</h2>
            <p>When interacting with this website, you agree not to:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Submit false, misleading, or abusive information through forms.</li>
              <li>
                Transmit sensitive health records, insurance numbers, or payment data via standard
                web forms.
              </li>
              <li>Attempt to circumvent security measures or disrupt website operation.</li>
              <li>
                Scrape, duplicate, or exploit website code or assets without written authorization.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-medium text-foreground">
              5. Third-Party Links & Navigation
            </h2>
            <p>
              This website provides external links to third-party services (such as Google Maps for
              directions and Zocdoc for verified scheduling). {PRACTICE.name} is not responsible for
              the content, privacy practices, or availability of third-party platforms.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-medium text-foreground">6. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted under applicable law, {PRACTICE.name}, its providers,
              and developers shall not be liable for any indirect, incidental, or consequential
              damages resulting from the use of or inability to use this website.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)] space-y-3">
            <h2 className="text-lg font-medium text-foreground">Contact & Office Inquiries</h2>
            <p>
              For questions regarding these terms or practice policies, please reach out to our
              office:
            </p>
            <div className="text-xs text-foreground space-y-1">
              <p className="font-semibold">
                {PRACTICE.name} — {PRACTICE.provider}
              </p>
              <p>
                {PRACTICE.addressLine}, {PRACTICE.addressCity}
              </p>
              <p>
                Phone:{" "}
                <a href={PRACTICE.phoneHref} className="text-accent underline hover:opacity-80">
                  {PRACTICE.phoneDisplay}
                </a>
              </p>
            </div>
          </div>

          <ConceptNoticeInline className="w-full justify-center" />
        </div>
      </Section>
    </>
  );
}
