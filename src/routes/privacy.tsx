import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, Lock, Phone, ShieldCheck } from "lucide-react";
import { toast } from "sonner";

import { ConceptNoticeInline } from "@/components/site/ConceptNotice";
import { Section, SectionHeading } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { PRACTICE } from "@/lib/site";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Premium Dental Clinic" },
      {
        name: "description",
        content:
          "Privacy policy for the Premium Dental Clinic website concept by MNW Creative Studio, explaining data practices, patient privacy protections, and demo information handling.",
      },
      { property: "og:title", content: "Privacy Policy — Premium Dental Clinic" },
    ],
  }),
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
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
          eyebrow="Legal & Compliance"
          title="Privacy Policy"
          intro={`This Privacy Policy outlines how ${PRACTICE.name} handles information collected through this website. Last updated: September 2026.`}
        />
      </Section>

      <Section className="pt-0">
        <div className="mx-auto max-w-3xl space-y-10 text-sm leading-relaxed text-muted-foreground">
          <div className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
            <div className="flex items-center gap-2 text-foreground font-semibold">
              <ShieldCheck aria-hidden="true" className="size-5 text-accent" />
              <span>Concept Website Notice</span>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              This website is an informational concept demonstration for {PRACTICE.name} created by
              MNW Creative Studio. Demo appointment requests do not transmit personal data to third
              parties, and no real medical or payment information is collected or stored.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-medium text-foreground">1. Information We Collect</h2>
            <p>
              When you use this website, we may collect information you voluntarily provide, such as
              your name, telephone number, and email address when submitting an appointment inquiry
              or contact request.
            </p>
            <p>
              <strong>Protected Health Information (PHI):</strong> Please do not submit medical
              histories, diagnostic information, or sensitive health data through online forms. In
              accordance with healthcare privacy standards, clinical communications must be
              conducted directly with the practice.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-medium text-foreground">2. How We Use Information</h2>
            <p>Information provided through the website is utilized solely for:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Responding to patient inquiries and appointment requests.</li>
              <li>Providing practice location and scheduling guidance.</li>
              <li>Improving website functionality and user experience.</li>
              <li>Complying with applicable legal and healthcare regulatory requirements.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-medium text-foreground">3. Protection & Confidentiality</h2>
            <p>
              {PRACTICE.name} maintains strict administrative, technical, and physical safeguards
              designed to protect personal information against unauthorized access, loss, or
              disclosure. We do not sell, rent, or lease personal information to marketers or
              unauthorized third parties.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-medium text-foreground">4. Cookies & Usage Analytics</h2>
            <p>
              This website may use essential cookies and basic session technologies to maintain site
              navigation, form functionality, and page performance. No invasive tracking or
              cross-site behavioral advertising cookies are deployed.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-medium text-foreground">5. Your Privacy Rights</h2>
            <p>
              Under applicable state and federal laws, you have the right to request access to,
              correction of, or deletion of personal contact records held by the practice. To
              exercise these rights, please contact the office directly.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)] space-y-3">
            <h2 className="text-lg font-medium text-foreground">Questions or Concerns?</h2>
            <p>
              For any questions regarding this Privacy Policy or your personal information, please
              contact our office:
            </p>
            <div className="text-xs text-foreground space-y-1">
              <p className="font-semibold">
                {PRACTICE.name} — {PRACTICE.provider}
              </p>
              <p>
                {PRACTICE.addressLine}, {PRACTICE.addressCity}
              </p>
              <p>
                Telephone:{" "}
                <a
                  href={PRACTICE.phoneHref}
                  onClick={(e) => {
                    e.preventDefault();
                    toast("Demo Phone Number", {
                      description:
                        "+1 (000) 000-0000 is a simulated contact number for this MNW Creative Studio portfolio demo.",
                    });
                  }}
                  className="text-accent underline hover:opacity-80"
                >
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
