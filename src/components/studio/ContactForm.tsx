import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
const fields = [
  "Wedding",
  "Engagement",
  "Birthday",
  "Pre-Wedding",
  "Corporate Event",
  "Religious Function",
  "Other",
];
export function ContactForm({ initialService = "" }: { initialService?: string }) {
  const [sent, setSent] = useState(false);
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (e.currentTarget.checkValidity()) setSent(true);
  };
  if (sent)
    return (
      <div className="grid min-h-96 place-items-center rounded-xl border border-primary/30 bg-primary/10 p-8 text-center">
        <div>
          <CheckCircle2 className="mx-auto size-11 text-primary" />
          <h2 className="mt-4 font-display text-3xl">Enquiry ready</h2>
          <p className="mt-2 text-muted-foreground">
            Thank you. This frontend demo has validated your details. Sending will be connected when
            the enquiry backend is added.
          </p>
        </div>
      </div>
    );
  return (
    <form
      onSubmit={submit}
      className="grid gap-5 rounded-xl border border-border bg-card/60 p-6 backdrop-blur-xl md:grid-cols-2 md:p-8"
    >
      <Field label="Name" name="name" autoComplete="name" />
      <Field
        label="Phone Number"
        name="phone"
        type="tel"
        pattern="[0-9+() -]{7,}"
        autoComplete="tel"
      />
      <Field label="Email" name="email" type="email" autoComplete="email" />
      <label className="grid gap-2 text-sm">
        Event Type
        <select name="eventType" defaultValue={initialService} required className="field">
          <option value="" disabled>
            Select an event
          </option>
          {fields.map((x) => (
            <option key={x}>{x}</option>
          ))}
        </select>
      </label>
      <Field label="Event Date" name="date" type="date" />
      <Field label="Location" name="location" />
      <label className="grid gap-2 text-sm md:col-span-2">
        Tell us about your event
        <textarea
          name="message"
          required
          minLength={10}
          rows={5}
          className="field resize-none"
          placeholder="Guest count, venue, mood, and the moments that matter most…"
        />
      </label>
      <Button type="submit" size="lg" className="rounded-full md:col-span-2">
        Send Enquiry
      </Button>
    </form>
  );
}
function Field({
  label,
  ...props
}: {
  label: string;
  name: string;
  type?: string;
  pattern?: string;
  autoComplete?: string;
}) {
  return (
    <label className="grid gap-2 text-sm">
      {label}
      <input required className="field" {...props} />
    </label>
  );
}
