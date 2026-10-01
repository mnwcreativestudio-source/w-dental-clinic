export const CONCEPT_NOTICE = "CONCEPT WEBSITE — DEMO ONLY — NOT AFFILIATED WITH W | DENTAL";

export const PRACTICE = {
  name: "W | DENTAL",
  provider: "Dr. Walishah Ahmadi, DDS",
  city: "Far Rockaway, New York",
  addressLine: "18–26 Cornaga Ave",
  addressCity: "Far Rockaway, NY 11691",
  country: "United States",
  phoneDisplay: "(347) 230-4441",
  phoneHref: "tel:+13472304441",
  mapsHref:
    "https://www.google.com/maps/dir/?api=1&destination=" +
    encodeURIComponent("18-26 Cornaga Ave, Far Rockaway, NY 11691"),
  hoursNotice: "Please confirm current hours directly with the clinic.",
} as const;

/**
 * No verified Zocdoc destination was supplied for this concept, so the
 * "Book Online" control renders as an unconfigured placeholder that must be
 * pointed at the verified listing before any launch.
 */
export const ZOCDOC_URL: string | null = null;

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
      "An appointment to discuss your dental care questions and available options with the provider.",
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
    description: "Whitening is listed among the practice's cosmetic dental care categories.",
  },
  {
    slug: "implants",
    title: "Dental Implants",
    icon: "anchor",
    description: "Implant care is listed among the practice's dental service categories.",
  },
  {
    slug: "emergency",
    title: "Emergency Dental Care",
    icon: "siren",
    description:
      "Emergency dental care is listed among the practice's services. Contact the office directly regarding urgent needs.",
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
  "Demo request received — this concept form is not connected to W | Dental or an email service, so no appointment has been booked and no message has been delivered.";
