import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-shop.jpg";
import craftImg from "@/assets/barber-craft.jpg";
import { TrustBar } from "@/components/TrustBar";
import { Testimonials } from "@/components/Testimonials";
import { CtaSection } from "@/components/CtaSection";
import { useBooking } from "@/components/BookingDialog";
import { LOCATIONS, HOURS_NOTE } from "@/lib/site-data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight, MapPin, Scissors, Award, Users, Heart } from "lucide-react";

const FAQS = [
  {
    q: "What are your hours?",
    a: "Most TNU locations run Monday–Saturday 9am–7pm, with Sundays by appointment. Call your nearest shop to confirm today's hours.",
  },
  {
    q: "Do you take walk-ins?",
    a: "Yes — walk-ins are always welcome. To skip the wait we recommend booking online; it takes about 60 seconds.",
  },
  {
    q: "What services do you offer?",
    a: "Haircuts, fades, lineups, beard sculpting, hot shaves, kids cuts, women's cuts, natural hair styling, locs, and more across all 4 Maryland locations.",
  },
  {
    q: "Do you cut kids' hair?",
    a: "Absolutely. We've been the family barbershop for generations of Bowie, Upper Marlboro and Crofton families. Kids cuts are one of our most-booked services.",
  },
  {
    q: "Are women welcome?",
    a: "100%. TNU is a full barber salon. Our stylists cut and style natural hair, locs, women's tapers, and more.",
  },
  {
    q: "Where are you located?",
    a: "Four Maryland shops: Collington Plaza (Bowie), Mount Oak Plaza (Bowie), Upper Marlboro, and Crofton Center.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Best Barber Shop in Bowie MD | Tight N Up Barber Salon" },
      {
        name: "description",
        content:
          "Maryland's trusted multicultural barber salon. 4 locations in Bowie, Upper Marlboro & Crofton. 20+ years cutting men, women & kids. Book online in 60 seconds.",
      },
      { property: "og:title", content: "Best Barber Shop in Bowie MD | Tight N Up Barber Salon" },
      {
        property: "og:description",
        content: "Maryland's trusted multicultural barber salon. 4 locations. 20+ years of craftsmanship.",
      },
      { property: "og:url", content: "/" },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Tight N Up Barber Salon",
          image: heroImg,
          telephone: "+1-301-430-5264",
          email: "cbtruesdale1@gmail.com",
          priceRange: "$$",
          address: {
            "@type": "PostalAddress",
            streetAddress: "3532 Crain Hwy",
            addressLocality: "Bowie",
            addressRegion: "MD",
            postalCode: "20716",
            addressCountry: "US",
          },
          areaServed: ["Bowie MD", "Upper Marlboro MD", "Crofton MD", "Prince George's County"],
        }),
      },
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
  component: HomePage,
});

function HomePage() {
  const { open } = useBooking();

  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroImg}
            alt="Interior of Tight N Up Barber Salon — premium leather chairs and warm gold lighting"
            className="h-full w-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/65 to-background" />
        </div>
        <div className="mx-auto max-w-7xl px-4 pb-24 pt-20 sm:pt-28 lg:px-8 lg:pb-32 lg:pt-36">
          <p className="font-label text-sm tracking-[0.3em] text-gold">EST. 2001 · BOWIE, MD</p>
          <h1 className="mt-4 max-w-4xl font-display text-5xl font-bold leading-[1.05] text-foreground sm:text-6xl lg:text-7xl">
            Bowie's Most Trusted Barber Salon —{" "}
            <span className="text-gold">4 Locations</span> Across Maryland
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            20+ years of craftsmanship. Multicultural, award-winning, community-rooted.
            Fresh cuts for men, women, and kids from Bowie to Crofton.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={open}
              className="inline-flex items-center gap-2 rounded-sm bg-gold px-7 py-4 text-sm font-semibold uppercase tracking-wider text-gold-foreground transition hover:bg-gold-soft"
            >
              Book Your Cut <ArrowRight className="h-4 w-4" />
            </button>
            <Link
              to="/locations"
              className="inline-flex items-center gap-2 rounded-sm border border-foreground/30 px-7 py-4 text-sm font-semibold uppercase tracking-wider text-foreground transition hover:border-gold hover:text-gold"
            >
              See Locations
            </Link>
          </div>
          <p className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground">
            <Award className="h-4 w-4 text-gold" />
            Small Business of the Year — Bowie Chamber of Commerce
          </p>
        </div>
      </section>

      <TrustBar />

      {/* LOCATIONS PREVIEW */}
      <section className="mx-auto max-w-7xl px-4 py-24 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-label text-sm tracking-widest text-gold">FOUR SHOPS · ONE STANDARD</p>
            <h2 className="mt-2 font-display text-4xl text-foreground sm:text-5xl">
              Find Your Nearest TNU
            </h2>
          </div>
          <Link
            to="/locations"
            className="text-sm font-semibold uppercase tracking-wider text-gold hover:underline"
          >
            View all locations →
          </Link>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {LOCATIONS.map((loc) => (
            <div
              key={loc.slug}
              className="group flex flex-col rounded border border-border bg-card p-6 transition hover:border-gold"
            >
              <MapPin className="h-5 w-5 text-gold" />
              <h3 className="mt-4 font-display text-xl text-foreground">{loc.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {loc.street}
                <br />
                {loc.city}, {loc.state} {loc.zip}
              </p>
              <a
                href={`tel:${loc.phoneTel}`}
                className="mt-1 text-sm font-medium text-foreground hover:text-gold"
              >
                {loc.phone}
              </a>
              <a
                href={loc.bookerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center justify-center rounded-sm border border-gold px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-gold transition hover:bg-gold hover:text-gold-foreground"
              >
                Get Fresh Today
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* WHY TNU */}
      <section className="border-y border-border bg-card/30">
        <div className="mx-auto max-w-7xl px-4 py-24 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="font-label text-sm tracking-widest text-gold">WHY TNU</p>
              <h2 className="mt-2 font-display text-4xl text-foreground sm:text-5xl">
                Generations of craftsmanship — and we're just getting sharper.
              </h2>
              <p className="mt-5 text-muted-foreground">
                Founded by Clinton Truesdale in 2001, Tight N Up has spent over two decades earning
                the trust of Maryland families. We're a multicultural barber salon — every chair, every
                texture, every age. Sharp cuts, clean shops, community always.
              </p>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  { i: Scissors, t: "20+ Years Experience", d: "Master craft, refined daily." },
                  { i: Award, t: "Award-Winning Shop", d: "Bowie Chamber recognition." },
                  { i: Users, t: "Multicultural Staff", d: "Every texture, every style." },
                  { i: Heart, t: "Community Rooted", d: "Family-owned since 2001." },
                ].map((x) => (
                  <li key={x.t} className="flex gap-3">
                    <x.i className="mt-1 h-5 w-5 shrink-0 text-gold" />
                    <div>
                      <div className="font-semibold text-foreground">{x.t}</div>
                      <div className="text-sm text-muted-foreground">{x.d}</div>
                    </div>
                  </li>
                ))}
              </ul>
              <Link
                to="/about"
                className="mt-8 inline-flex text-sm font-semibold uppercase tracking-wider text-gold hover:underline"
              >
                Read our story →
              </Link>
            </div>
            <div className="relative">
              <img
                src={craftImg}
                alt="TNU barber giving a precision fade haircut to a Black client in Bowie, Maryland"
                loading="lazy"
                width={1024}
                height={1024}
                className="w-full rounded border border-border"
              />
              <div className="absolute -bottom-4 -left-4 rounded border border-gold bg-background px-5 py-3 font-label text-xs tracking-widest text-gold">
                EST. 2001 · CLINTON TRUESDALE
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-4 py-24 lg:px-8">
        <p className="text-center font-label text-sm tracking-widest text-gold">REAL CLIENTS · REAL CUTS</p>
        <h2 className="mt-2 text-center font-display text-4xl text-foreground sm:text-5xl">
          What our family of clients say
        </h2>
        <div className="mt-12">
          <Testimonials />
        </div>
        <div className="mt-10 text-center">
          <button
            onClick={open}
            className="rounded-sm bg-gold px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-gold-foreground hover:bg-gold-soft"
          >
            Reserve Your Chair
          </button>
        </div>
      </section>

      {/* PRODUCTS TEASER */}
      <section className="border-y border-border bg-card/30">
        <div className="mx-auto max-w-7xl px-4 py-24 lg:px-8">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="font-label text-sm tracking-widest text-gold">TNU GROOMING LINE</p>
              <h2 className="mt-2 font-display text-4xl text-foreground sm:text-5xl">
                Professional hair &amp; skin care, made for every texture.
              </h2>
              <p className="mt-4 max-w-2xl text-muted-foreground">
                Bump B Gone · Hair &amp; Scalp Shampoo · Nappi Curl Twisting Crème · Hair &amp; Scalp
                Antiseptic. Pick up at any TNU shop.
              </p>
            </div>
            <Link
              to="/products"
              className="inline-flex w-fit items-center gap-2 rounded-sm border border-gold px-6 py-3 text-sm font-semibold uppercase tracking-wider text-gold hover:bg-gold hover:text-gold-foreground"
            >
              Shop Products <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ANNIVERSARY */}
      <section className="mx-auto max-w-7xl px-4 py-24 lg:px-8">
        <div className="rounded border border-gold/40 bg-gradient-to-br from-card to-background p-8 sm:p-12">
          <p className="font-label text-sm tracking-widest text-gold">2001 — 2026</p>
          <h2 className="mt-2 font-display text-4xl text-foreground sm:text-5xl">
            25 Years of Cutting Hair, Building Community
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            We're celebrating a quarter-century of craftsmanship. Watch our 25-Year Anniversary tribute.
          </p>
          <div className="mt-8 aspect-video w-full overflow-hidden rounded border border-border">
            <iframe
              src="https://www.youtube.com/embed/_PTrWKFJZpM"
              title="Tight N Up 25 Year Anniversary"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="h-full w-full"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border bg-card/30">
        <div className="mx-auto max-w-3xl px-4 py-24 lg:px-8">
          <p className="text-center font-label text-sm tracking-widest text-gold">FAQ</p>
          <h2 className="mt-2 text-center font-display text-4xl text-foreground sm:text-5xl">
            Quick answers
          </h2>
          <Accordion type="single" collapsible className="mt-10">
            {FAQS.map((f, idx) => (
              <AccordionItem key={f.q} value={`f-${idx}`} className="border-border">
                <AccordionTrigger className="text-left font-display text-lg text-foreground hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <p className="mt-8 text-center text-sm text-muted-foreground">{HOURS_NOTE}</p>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
