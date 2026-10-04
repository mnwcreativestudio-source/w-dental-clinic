import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, FileCheck2, ShieldAlert } from "lucide-react";
import { toast } from "sonner";

import { ConceptNoticeInline } from "@/components/site/ConceptNotice";
import { Section, SectionHeading } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { PRACTICE } from "@/lib/site";

export const Route = createFileRoute("/hipaa-notice")({
  head: () => ({
    meta: [
      { title: "HIPAA Notice of Privacy Practices — Premium Dental Clinic" },
      {
        name: "description",
        content:
          "HIPAA Notice of Privacy Practices for Premium Dental Clinic concept demo by MNW Creative Studio, outlining protected health information rights, disclosures, and privacy duties.",
      },
      { property: "og:title", content: "HIPAA Notice of Privacy Practices — Premium Dental Clinic" },
    ],
  }),
  component: HipaaNotice,
});

function HipaaNotice() {
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
          eyebrow="Healthcare Compliance"
          title="Notice of Privacy Practices (HIPAA)"
          intro={`THIS NOTICE DESCRIBES HOW MEDICAL AND DENTAL INFORMATION ABOUT YOU MAY BE USED AND DISCLOSED AND HOW YOU CAN GET ACCESS TO THIS INFORMATION. PLEASE REVIEW CAREFULLY.`}
        />
      </Section>

      <Section className="pt-0">
        <div className="mx-auto max-w-3xl space-y-10 text-sm leading-relaxed text-muted-foreground">
          <div className="rounded-xl border border-accent/25 bg-accent/5 p-6 text-foreground">
            <div className="flex items-center gap-2 font-semibold text-accent">
              <FileCheck2 aria-hidden="true" className="size-5" />
              <span>Federal Privacy Mandate</span>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              Under the Health Insurance Portability and Accountability Act of 1996 (HIPAA),{" "}
              {PRACTICE.name} is required to maintain the privacy of your Protected Health
              Information (PHI) and to provide you with this formal Notice of our legal duties and
              privacy practices.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-medium text-foreground">
              1. Permitted Uses and Disclosures
            </h2>
            <p>
              We may use and disclose your Protected Health Information for the following primary
              clinical purposes:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Treatment:</strong> Providing, coordinating, or managing your dental and
                oral healthcare, including consultations with dental specialists or diagnostic
                imaging providers.
              </li>
              <li>
                <strong>Payment:</strong> Billing and collecting payment from you, your dental
                insurance carrier, or designated third-party payers for treatments received.
              </li>
              <li>
                <strong>Healthcare Operations:</strong> Quality assessment, staff evaluations,
                clinical audits, licensing, and compliance with healthcare accrediting bodies.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-medium text-foreground">
              2. Your Individual Rights Under HIPAA
            </h2>
            <p>
              As a patient of {PRACTICE.name}, you hold federal statutory rights regarding your
              health information:
            </p>
            <div className="grid gap-3 pt-2">
              {[
                {
                  title: "Right to Inspect and Copy",
                  desc: "You have the right to inspect and obtain a copy of your dental charts, radiographs, and billing records.",
                },
                {
                  title: "Right to Amend",
                  desc: "If you believe your health record is incomplete or inaccurate, you may submit a written request to amend the record.",
                },
                {
                  title: "Right to an Accounting of Disclosures",
                  desc: "You may request a list of certain disclosures we have made of your health information outside of treatment, payment, and operations.",
                },
                {
                  title: "Right to Request Restrictions",
                  desc: "You have the right to request restrictions on how your health information is used or disclosed for treatment or payment.",
                },
                {
                  title: "Right to Confidential Communications",
                  desc: "You may request that we communicate with you by alternative means (such as a specific phone number or mailing address).",
                },
                {
                  title: "Right to a Paper Copy",
                  desc: "You are entitled to receive a physical paper copy of this Notice of Privacy Practices upon request at our reception desk.",
                },
              ].map((r) => (
                <div key={r.title} className="rounded-lg border border-border bg-card p-4">
                  <h3 className="font-medium text-foreground">{r.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{r.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-medium text-foreground">3. Our Legal Duties</h2>
            <p>
              {PRACTICE.name} is mandated by law to maintain the confidentiality of Protected Health
              Information, notify affected individuals following a breach of unsecured health data,
              and abide by the terms of the Notice currently in effect.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-medium text-foreground">
              4. Questions & Filing Complaints
            </h2>
            <p>
              If you have questions about our privacy policies or believe your privacy rights have
              been violated, you may file a complaint directly with our office Privacy Official or
              with the Secretary of the U.S. Department of Health and Human Services (HHS) Office
              for Civil Rights.{" "}
              <strong>You will not be retaliated against for filing a complaint.</strong>
            </p>
            <div className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)] space-y-2 mt-4">
              <p className="text-xs font-semibold text-foreground">Practice Privacy Contact:</p>
              <p className="text-xs text-foreground">{PRACTICE.name} — Attn: Privacy Official</p>
              <p className="text-xs text-muted-foreground">
                {PRACTICE.addressLine}, {PRACTICE.addressCity}
              </p>
              <p className="text-xs text-muted-foreground">
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
