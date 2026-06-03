import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import { CtaSection } from "@/components/CtaSection";
import { LOCATIONS, PHONE, PHONE_TEL, EMAIL, FACEBOOK_URL, INSTAGRAM_URL } from "@/lib/site-data";

const Schema = z.object({
  name: z.string().trim().min(1, "Name required").max(80),
  email: z.string().trim().email("Valid email required").max(160),
  phone: z.string().trim().max(40).optional(),
  location: z.string().min(1, "Pick a location"),
  message: z.string().trim().min(5, "Tell us a bit more").max(1000),
});

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Tight N Up Barber Salon | Bowie, Crofton, Upper Marlboro MD" },
      {
        name: "description",
        content:
          "Get in touch with Tight N Up Barber Salon. 4 Maryland locations, click-to-call, email, and contact form for questions, bookings, or feedback.",
      },
      { property: "og:title", content: "Contact Tight N Up Barber Salon" },
      {
        property: "og:description",
        content: "Call, email, or message TNU at any of our 4 Maryland barber shops.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = Schema.safeParse(form);
    if (!result.success) {
      toast.error(result.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setSubmitting(true);
    const subject = encodeURIComponent(`TNU contact form — ${result.data.name}`);
    const body = encodeURIComponent(
      `Name: ${result.data.name}\nEmail: ${result.data.email}\nPhone: ${result.data.phone ?? ""}\nLocation: ${result.data.location}\n\n${result.data.message}`,
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    toast.success("Opening your email — message ready to send.");
    setSubmitting(false);
  };

  return (
    <>
      <section className="border-b border-border bg-card/30">
        <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
          <p className="font-label text-sm tracking-widest text-gold">REACH US</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl text-foreground sm:text-5xl lg:text-6xl">
            Get in Touch With Tight N Up
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Questions, feedback, or want to book a special service? Call us, email us, or send a
            message below.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-2 rounded-sm bg-gold px-6 py-3 text-sm font-semibold uppercase tracking-wider text-gold-foreground hover:bg-gold-soft"
            >
              <Phone className="h-4 w-4" /> Call {PHONE}
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 rounded-sm border border-border px-6 py-3 text-sm font-semibold uppercase tracking-wider text-foreground hover:border-gold hover:text-gold"
            >
              <Mail className="h-4 w-4" /> Email
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-20 lg:grid-cols-[1.2fr_1fr] lg:px-8">
        <form onSubmit={onSubmit} className="rounded border border-border bg-card p-8">
          <h2 className="font-display text-2xl text-foreground">Send us a message</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Field
              label="Name"
              value={form.name}
              onChange={(v) => setForm({ ...form, name: v })}
              required
            />
            <Field
              label="Email"
              type="email"
              value={form.email}
              onChange={(v) => setForm({ ...form, email: v })}
              required
            />
            <Field
              label="Phone"
              type="tel"
              value={form.phone}
              onChange={(v) => setForm({ ...form, phone: v })}
            />
            <div>
              <label className="font-label text-xs tracking-widest text-muted-foreground">
                LOCATION
              </label>
              <select
                value={form.location}
                onChange={(e) => setForm({ ...form, location: e.target.value })}
                className="mt-1.5 block h-11 w-full rounded-sm border border-border bg-input px-3 text-sm text-foreground outline-none focus:border-gold"
                required
              >
                <option value="">Select a shop</option>
                {LOCATIONS.map((l) => (
                  <option key={l.slug} value={l.name}>
                    {l.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="mt-4">
            <label className="font-label text-xs tracking-widest text-muted-foreground">
              MESSAGE
            </label>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              rows={5}
              maxLength={1000}
              className="mt-1.5 block w-full rounded-sm border border-border bg-input p-3 text-sm text-foreground outline-none focus:border-gold"
            />
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="mt-6 inline-flex w-full items-center justify-center rounded-sm bg-gold px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-gold-foreground hover:bg-gold-soft disabled:opacity-60"
          >
            Send Message
          </button>
        </form>

        <aside>
          <h2 className="font-display text-2xl text-foreground">All TNU locations</h2>
          <ul className="mt-6 space-y-6">
            {LOCATIONS.map((l) => (
              <li key={l.slug} className="rounded border border-border bg-card p-5">
                <div className="font-display text-lg text-foreground">{l.name}</div>
                <div className="mt-2 flex items-start gap-2 text-sm text-muted-foreground">
                  <MapPin className="mt-0.5 h-4 w-4 text-gold" />
                  <span>
                    {l.street}, {l.city}, {l.state} {l.zip}
                  </span>
                </div>
                <a
                  href={`tel:${l.phoneTel}`}
                  className="mt-2 inline-flex items-center gap-2 text-sm text-foreground hover:text-gold"
                >
                  <Phone className="h-4 w-4 text-gold" /> {l.phone}
                </a>
                <div className="mt-1 text-xs text-muted-foreground">Mon–Sat 9am–7pm</div>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex items-center gap-3">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-muted-foreground hover:text-gold"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-muted-foreground hover:text-gold"
            >
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </aside>
      </section>

      <CtaSection
        eyebrow="SKIP THE FORM"
        title="Just book — it's faster"
        subtitle="Reserve your chair at any of our 4 Maryland shops."
        ctaLabel="Book Online"
      />
    </>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="font-label text-xs tracking-widest text-muted-foreground">
        {label.toUpperCase()}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="mt-1.5 block h-11 w-full rounded-sm border border-border bg-input px-3 text-sm text-foreground outline-none focus:border-gold"
      />
    </div>
  );
}
