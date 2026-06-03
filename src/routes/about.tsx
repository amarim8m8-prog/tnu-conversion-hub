import { createFileRoute } from "@tanstack/react-router";
import { CtaSection } from "@/components/CtaSection";
import { TrustBar } from "@/components/TrustBar";

import { Award } from "lucide-react";

const TIMELINE = [
  { year: "2001", t: "TNU Founded", d: "Clinton Truesdale opens the first Tight N Up in Bowie, MD." },
  { year: "2008", t: "Community Award", d: "Recognized by the Bowie Chamber of Commerce." },
  { year: "2014", t: "Second Location", d: "Mount Oak Plaza opens — same standard, new chairs." },
  { year: "2018", t: "Crofton Center Opens", d: "Anne Arundel County gets its own TNU shop." },
  { year: "2021", t: "20 Years Strong", d: "Generations of Maryland families served." },
  { year: "2024", t: "Upper Marlboro", d: "Fourth location opens to meet growing demand." },
  { year: "2026", t: "25 Year Anniversary", d: "A quarter-century of craftsmanship." },
];

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Tight N Up — 20+ Years in Bowie, MD | Clinton Truesdale" },
      {
        name: "description",
        content:
          "20+ years cutting, styling and building community across Maryland. Founded by Clinton Truesdale in 2001 — the story of TNU.",
      },
      { property: "og:title", content: "About TNU — Generations of Craftsmanship" },
      {
        property: "og:description",
        content: "How Clinton Truesdale built Tight N Up into Maryland's most trusted barber salon.",
      },
      { property: "og:url", content: "/about" },
      { property: "og:image", content: "" },
      { name: "twitter:image", content: "" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="border-b border-border bg-card/30">
        <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
          <p className="font-label text-sm tracking-widest text-gold">OUR STORY</p>
          <h1 className="mt-3 max-w-4xl font-display text-4xl text-foreground sm:text-5xl lg:text-6xl">
            20+ Years Cutting, Styling &amp; Building Community in Maryland
          </h1>
        </div>
      </section>

      <TrustBar />

      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl text-foreground sm:text-4xl">
              Founded by Clinton Truesdale
            </h2>
            <div className="mt-5 space-y-4 text-muted-foreground">
              <p>
                In 2001, Clinton Truesdale opened the first Tight N Up Barber Salon with a simple
                belief: every chair should welcome every texture, every age, every culture — and
                every cut should be sharp. Twenty-plus years later, that belief still runs every
                shop.
              </p>
              <p>
                Clinton has spent his career mentoring barbers and stylists, building a team that
                cares as much about your time and your trust as they do about clean fades and
                defined curls. TNU isn't just a barbershop — it's a Maryland institution.
              </p>
              <p>
                Recognized as Small Business of the Year by the Bowie Chamber of Commerce, TNU
                serves Bowie, Upper Marlboro, Crofton and the wider Prince George's and Anne
                Arundel communities — Black-owned, multicultural, and family-rooted.
              </p>
            </div>
            <div className="mt-6 inline-flex items-center gap-2 rounded border border-gold/40 bg-card px-4 py-3 text-sm text-foreground">
              <Award className="h-4 w-4 text-gold" />
              Small Business of the Year — Bowie Chamber of Commerce
            </div>
          </div>
          <div>
            <div className="aspect-square w-full rounded border border-border bg-gradient-to-br from-card/50 to-background flex items-center justify-center">
              <span className="text-muted-foreground/50 font-label tracking-widest text-sm">BARBER IMAGE (PLACEHOLDER)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="border-y border-border bg-card/30">
        <div className="mx-auto max-w-5xl px-4 py-20 lg:px-8">
          <p className="font-label text-sm tracking-widest text-gold">2001 — 2026</p>
          <h2 className="mt-2 font-display text-4xl text-foreground sm:text-5xl">
            25 Years &amp; counting
          </h2>
          <ol className="mt-10 space-y-6 border-l border-gold/40 pl-6">
            {TIMELINE.map((m) => (
              <li key={m.year} className="relative">
                <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-gold ring-4 ring-background" />
                <div className="font-label text-sm tracking-widest text-gold">{m.year}</div>
                <h3 className="font-display text-xl text-foreground">{m.t}</h3>
                <p className="text-sm text-muted-foreground">{m.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Video */}
      <section className="mx-auto max-w-5xl px-4 py-20 lg:px-8">
        <div className="aspect-video w-full overflow-hidden rounded border border-border">
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
      </section>

      {/* Staff culture */}
      <section className="border-t border-border bg-card/30">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center lg:px-8">
          <p className="font-label text-sm tracking-widest text-gold">THE TNU TEAM</p>
          <h2 className="mt-2 font-display text-4xl text-foreground sm:text-5xl">
            Vetted. Skilled. Dedicated.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            Every barber at TNU is vetted, skilled, and dedicated to your satisfaction. From
            classic gentleman's cuts to modern fades, natural hair to locs — our team brings
            craft and care to every chair.
          </p>
        </div>
      </section>

      <CtaSection
        eyebrow="JOIN THE FAMILY"
        title="Sit in a TNU chair — you'll get why we've lasted 25 years."
        ctaLabel="Book Your Cut"
      />
    </>
  );
}
