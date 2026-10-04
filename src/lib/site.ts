export const CONCEPT_NOTICE =
  "CONCEPT PORTFOLIO DEMO — CREATED BY MNW CREATIVE STUDIO — DEMO ONLY";

export const PRACTICE = {
  name: "Premium Dental Clinic",
  provider: "Our Dental Care Team",
  city: "Location",
  addressLine: "Clinic Address",
  addressCity: "Location",
  country: "Location",
  phoneDisplay: "+1 (000) 000-0000",
  phoneHref: "tel:+10000000000",
  email: "example@email.com",
  emailHref: "mailto:example@email.com",
  mapsHref: "#directions",
  hoursNotice: "Demo clinic hours: Monday – Friday, 8:00 AM – 5:00 PM.",
  footerNotice: "Concept website by MNW Creative Studio — Demo only.",
} as const;

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Patient Info", to: "/patient-info" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
] as const;

export const LEGAL_LINKS = [
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Terms of Service", to: "/terms" },
  { label: "HIPAA Notice", to: "/hipaa-notice" },
  { label: "Accessibility Statement", to: "/accessibility" },
] as const;

export const SERVICES = [
  {
    slug: "general",
    title: "General Dental Care",
    icon: "stethoscope",
    description:
      "Routine dental care for everyday oral health needs, coordinated through the practice.",
  },
  {
    slug: "cleanings",
    title: "Dental Cleanings",
    icon: "sparkles",
    description: "Professional cleaning appointments as part of ongoing preventive dental care.",
  },
  {
    slug: "consultations",
    title: "Dental Consultations",
    icon: "messages",
    description:
      "An appointment to discuss your dental care questions and available options with our dental care team.",
  },
  {
    slug: "cosmetic",
    title: "Cosmetic Dental Treatments",
    icon: "gem",
    description: "Treatments focused on the appearance of teeth, discussed during a consultation.",
  },
  {
    slug: "whitening",
    title: "Teeth Whitening",
    icon: "sun",
    description: "Professional whitening treatments focused on safe, effective smile brightening.",
  },
  {
    slug: "implants",
    title: "Dental Implants",
    icon: "anchor",
    description: "Implant care is listed among the clinic's comprehensive restorative categories.",
  },
  {
    slug: "emergency",
    title: "Emergency Dental Care",
    icon: "siren",
    description:
      "Emergency dental care is listed among the clinic's services. Prompt attention for urgent dental needs.",
  },
] as const;

export const VISIT_TYPES = [
  "General Consultation",
  "Dental Cleaning",
  "Cosmetic Consultation",
  "Whitening",
  "Implant Consultation",
  "Emergency Dental Care",
  "Other",
] as const;

export const SENSITIVE_INFO_NOTICE =
  "Please do not include medical or other sensitive health information in this demo form.";

export const DEMO_SUBMIT_MESSAGE =
  "Demo request received — this concept form is a portfolio demonstration for MNW Creative Studio. No appointment has been booked and no message has been sent.";
