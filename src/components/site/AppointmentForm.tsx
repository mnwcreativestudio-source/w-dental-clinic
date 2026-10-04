import { CheckCircle2, ShieldAlert } from "lucide-react";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DEMO_SUBMIT_MESSAGE, SENSITIVE_INFO_NOTICE, VISIT_TYPES } from "@/lib/site";

type Errors = Partial<Record<"name" | "email" | "phone", string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[+()\d\s.-]{10,20}$/;

export function AppointmentForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();

    const next: Errors = {};
    if (!name) next.name = "Please enter your full name.";
    if (!email) next.email = "Please enter your email address.";
    else if (!EMAIL_RE.test(email)) next.email = "Please enter a valid email address.";
    if (!phone) next.phone = "Please enter your phone number.";
    else if (!PHONE_RE.test(phone))
      next.phone = "Please enter a valid phone number (digits, spaces, + - ( ) only).";

    setErrors(next);
    if (Object.keys(next).length > 0) return;

    // Demo only: nothing is transmitted anywhere.
    setSubmitted(true);
    toast("Demo Request Received", {
      description:
        "This concept website is a portfolio demo by MNW Creative Studio. No appointment has been booked.",
    });
  }

  if (submitted) {
    return (
      <div
        role="status"
        className="rounded-xl border border-border bg-card p-8 shadow-[var(--shadow-card)]"
      >
        <CheckCircle2 aria-hidden="true" className="size-6 text-accent" />
        <h3 className="mt-4 text-2xl font-serif">Demo request received</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{DEMO_SUBMIT_MESSAGE}</p>
        <Button variant="quiet" size="xl" className="mt-6" onClick={() => setSubmitted(false)}>
          Start another demo request
        </Button>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)] sm:p-8"
    >
      <p className="flex items-start gap-3 rounded-md border border-border bg-secondary/70 p-4 text-xs leading-relaxed text-muted-foreground">
        <ShieldAlert aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
        <span>{SENSITIVE_INFO_NOTICE}</span>
      </p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <Field
          id="name"
          label="Full Name"
          required
          error={errors.name}
          input={<Input id="name" name="name" autoComplete="name" className="h-11" />}
        />
        <Field
          id="email"
          label="Email"
          required
          error={errors.email}
          input={
            <Input id="email" name="email" type="email" autoComplete="email" className="h-11" />
          }
        />
        <Field
          id="phone"
          label="Phone"
          required
          error={errors.phone}
          input={<Input id="phone" name="phone" type="tel" autoComplete="tel" className="h-11" />}
        />
        <Field
          id="visitType"
          label="General Visit Type"
          input={
            <select
              id="visitType"
              name="visitType"
              defaultValue={VISIT_TYPES[0]}
              className="h-11 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              {VISIT_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          }
        />
        <Field
          id="preferredDate"
          label="Preferred Date"
          input={<Input id="preferredDate" name="preferredDate" type="date" className="h-11" />}
        />
        <Field
          id="preferredTime"
          label="Preferred Time"
          input={<Input id="preferredTime" name="preferredTime" type="time" className="h-11" />}
        />
      </div>

      <Button type="submit" variant="ink" size="xl" className="mt-7 w-full sm:w-auto">
        Submit Demo Request
      </Button>

      <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
        This concept form is a demonstration only for MNW Creative Studio. Submissions are not sent
        anywhere and no appointment is booked.
      </p>
    </form>
  );
}

function Field({
  id,
  label,
  input,
  required,
  error,
}: {
  id: string;
  label: string;
  input: React.ReactNode;
  required?: boolean | undefined;
  error?: string | undefined;
}) {
  return (
    <div className={id === "name" ? "sm:col-span-2" : undefined}>
      <Label htmlFor={id} className="text-sm">
        {label}
        {required ? (
          <span aria-hidden="true" className="ml-1 text-accent">
            *
          </span>
        ) : null}
        {required ? <span className="sr-only"> (required)</span> : null}
      </Label>
      <div className="mt-2">{input}</div>
      {error ? (
        <p role="alert" className="mt-2 text-xs text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}
