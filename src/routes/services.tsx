import { createFileRoute } from "@tanstack/react-router";
import { CtaSection } from "@/components/CtaSection";
import { useBooking } from "@/components/BookingDialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Scissors, Sparkles, Baby, Flame, User, Spline } from "lucide-react";

const SERVICES = [
  {
    icon: Scissors,
    name: "Men's Haircuts",
    desc: "Classic, modern, textured. Tailored to your face shape and lifestyle.",
  },
  {
    icon: Spline,
    name: "Fades",
    desc: "Low, mid, high, skin, taper. Crisp blends every time, every texture.",
  },
  {
    icon: Sparkles,
    name: "Lineups & Beard Sculpting",
    desc: "Razor-sharp edges, defined lines, beard shaping. Maintenance for the discerning.",
  },
  {
    icon: Flame,
    name: "Hot Shaves",
    desc: "Traditional straight-razor shaves with hot towels and finishing balm.",
  },
  {
    icon: Baby,
    name: "Kids Cuts",
    desc: "Patient, friendly, and clean. We've cut three generations of Maryland kids.",
  },
  {
    icon: User,
    name: "Women's Cuts",
    desc: "Tapers, pixies, fades, and shaping. Our salon stylists deliver, no exceptions.",
  },
  {
    icon: Sparkles,
    name: "Natural Hair Care",
    desc: "Sculpting, shaping, and styling for every natural texture — coils to kinks.",
  },
  {
    icon: Spline,
    name: "Locs",
    desc: "Starter locs, retwists, maintenance, and styling by experienced loc artists.",
  },
];

const FAQS = [
  {
    q: "How much do cuts cost?",
    a: "Pricing varies by service, barber, and location. The most accurate prices are in our online booking — pick a service to see the rate at your shop.",
  },
  {
    q: "Do you accept walk-ins?",
    a: "Yes — every TNU location welcomes walk-ins. Booking ahead just saves you time on busy days.",
  },
  {
    q: "Can I request a specific barber?",
    a: "Absolutely. When you book online you'll see each barber's availability.",
  },
  {
    q: "Do you offer add-ons?",
    a: "Yes — eyebrow shaping, hot shave finishes, scalp treatments, beard color, and more. Add them during booking.",
  },
];

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Barber & Salon Services in Maryland | Tight N Up" },
      {
        name: "description",
        content:
          "Haircuts, fades, lineups, hot shaves, kids cuts, women's cuts, natural hair & locs across 4 Maryland barber salon locations.",
      },
      { property: "og:title", content: "TNU Services — Haircuts, Fades, Shaves & More" },
      {
        property: "og:description",
        content: "Pro barber & salon services across Bowie, Upper Marlboro & Crofton MD.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const { open } = useBooking();
  return (
    <>
      <section className="border-b border-border bg-card/30">
        <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
          <p className="font-label text-sm tracking-widest text-gold">WHAT WE DO</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl text-foreground sm:text-5xl lg:text-6xl">
            Professional Barber &amp; Salon Services in Maryland
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Every chair, every texture, every age. Below are the services available across our 4
            Maryland shops — pricing shown when you book.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => (
            <div
              key={s.name}
              className="group flex flex-col rounded border border-border bg-card p-6 transition hover:border-gold"
            >
              <s.icon className="h-6 w-6 text-gold" />
              <h2 className="mt-4 font-display text-xl text-foreground">{s.name}</h2>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{s.desc}</p>
              <button
                onClick={open}
                className="mt-5 inline-flex items-center justify-center rounded-sm border border-gold px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-gold transition hover:bg-gold hover:text-gold-foreground"
              >
                Book This Service
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-card/30">
        <div className="mx-auto max-w-3xl px-4 py-20 lg:px-8">
          <p className="text-center font-label text-sm tracking-widest text-gold">FAQ</p>
          <h2 className="mt-2 text-center font-display text-4xl text-foreground sm:text-5xl">
            Pricing &amp; walk-ins
          </h2>
          <Accordion type="single" collapsible className="mt-10">
            {FAQS.map((f, i) => (
              <AccordionItem key={f.q} value={`f-${i}`} className="border-border">
                <AccordionTrigger className="text-left font-display text-lg text-foreground hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <CtaSection
        eyebrow="READY FOR A CUT?"
        title="Reserve your chair in 60 seconds"
        ctaLabel="Book Your Service"
      />
    </>
  );
}
