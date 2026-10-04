import { Link, createFileRoute } from "@tanstack/react-router";
import { Accessibility, ArrowLeft, Eye, HeartHandshake, Phone } from "lucide-react";
import { toast } from "sonner";

import { ConceptNoticeInline } from "@/components/site/ConceptNotice";
import { Section, SectionHeading } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { PRACTICE } from "@/lib/site";

export const Route = createFileRoute("/accessibility")({
  head: () => ({
    meta: [
      { title: "Accessibility Statement — Premium Dental Clinic" },
      {
        name: "description",
        content:
          "Accessibility statement for Premium Dental Clinic concept demo by MNW Creative Studio, outlining our commitment to digital accessibility under ADA and WCAG 2.1 AA standards.",
      },
      { property: "og:title", content: "Accessibility Statement — Premium Dental Clinic" },
    ],
  }),
  component: AccessibilityStatement,
});

function AccessibilityStatement() {
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
          eyebrow="Accessibility"
          title="Digital Accessibility Statement"
          intro={`${PRACTICE.name} is committed to ensuring digital accessibility for patients and visitors of all abilities. We continually strive to enhance user experience for everyone.`}
        />
      </Section>

      <Section className="pt-0">
        <div className="mx-auto max-w-3xl space-y-10 text-sm leading-relaxed text-muted-foreground">
          <div className="rounded-xl border border-accent/25 bg-accent/5 p-6 text-foreground">
            <div className="flex items-center gap-2 font-semibold text-accent">
              <Accessibility aria-hidden="true" className="size-5" />
              <span>ADA & WCAG 2.1 Level AA Standards</span>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              We strive to adhere strictly to the Web Content Accessibility Guidelines (WCAG 2.1,
              Level AA) and the Americans with Disabilities Act (ADA) digital access requirements.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-medium text-foreground">
              1. Measures Taken to Support Accessibility
            </h2>
            <p>Our website incorporates the following accessibility features:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Keyboard Navigation:</strong> All interactive elements, including navigation
                links, appointment request buttons, and form inputs, are fully operable via
                keyboard.
              </li>
              <li>
                <strong>Screen Reader Compatibility:</strong> Semantic HTML5 landmarks, descriptive
                ARIA attributes, and hidden auxiliary labels ensure compatibility with assistive
                technologies.
              </li>
              <li>
                <strong>Contrast & Color Independence:</strong> Color contrast ratios exceed WCAG AA
                requirements, ensuring clarity for users with low vision or color blindness.
              </li>
              <li>
                <strong>Clear Visual Focus:</strong> Visible focus rings highlight active inputs and
                interactive elements when navigating via keyboard.
              </li>
              <li>
                <strong>Reduced Motion Support:</strong> The site respects system-level{" "}
                <code>prefers-reduced-motion</code> settings by disabling non-essential transitions.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-medium text-foreground">
              2. Physical Clinic Accessibility
            </h2>
            <p>
              In addition to our digital standards, {PRACTICE.name} at {PRACTICE.addressLine},{" "}
              {PRACTICE.addressCity} is committed to providing barrier-free physical access for
              individuals with disabilities. Please call our reception desk in advance if you have
              specific accessibility requests or mobility requirements for your appointment.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)] space-y-3">
            <h2 className="text-lg font-medium text-foreground">
              Feedback & Accessibility Support
            </h2>
            <p>
              If you experience difficulty accessing any part of this website, require alternative
              formats, or need personal assistance scheduling an appointment, our staff is ready to
              help you:
            </p>
            <div className="text-xs text-foreground space-y-1">
              <p className="font-semibold">{PRACTICE.name} Office Support</p>
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
            <p className="text-xs text-muted-foreground pt-1">
              We take your feedback seriously and evaluate all input to improve website
              accessibility.
            </p>
          </div>

          <ConceptNoticeInline className="w-full justify-center" />
        </div>
      </Section>
    </>
  );
}
