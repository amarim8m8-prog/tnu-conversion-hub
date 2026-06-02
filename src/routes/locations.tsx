import { createFileRoute } from "@tanstack/react-router";
import { TrustBar } from "@/components/TrustBar";
import { CtaSection } from "@/components/CtaSection";
import { LOCATIONS, HOURS_NOTE } from "@/lib/site-data";
import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";

export const Route = createFileRoute("/locations")({
  head: () => ({
    meta: [
      { title: "Barber Shop Locations — Bowie, Upper Marlboro, Crofton MD | Tight N Up" },
      {
        name: "description",
        content:
          "4 Tight N Up Barber Salon locations across Maryland: Collington Plaza, Mount Oak Plaza, Upper Marlboro & Crofton. Book at any shop in 60 seconds.",
      },
      { property: "og:title", content: "TNU Barber Shop Locations — Maryland" },
      {
        property: "og:description",
        content: "4 Maryland barber shops in Bowie, Upper Marlboro & Crofton.",
      },
      { property: "og:url", content: "/locations" },
    ],
    links: [{ rel: "canonical", href: "/locations" }],
    scripts: LOCATIONS.map((loc) => ({
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BarberShop",
        name: `Tight N Up Barber Salon — ${loc.name}`,
        telephone: `+1${loc.phoneTel.replace(/\D/g, "").slice(-10)}`,
        address: {
          "@type": "PostalAddress",
          streetAddress: loc.street,
          addressLocality: loc.city,
          addressRegion: loc.state,
          postalCode: loc.zip,
          addressCountry: "US",
        },
        geo: { "@type": "GeoCoordinates", latitude: loc.geo.lat, longitude: loc.geo.lng },
        openingHours: "Mo-Sa 09:00-19:00",
        priceRange: "$$",
      }),
    })),
  }),
  component: LocationsPage,
});

function LocationsPage() {
  return (
    <>
      <section className="border-b border-border bg-card/30">
        <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
          <p className="font-label text-sm tracking-widest text-gold">FOUR MARYLAND SHOPS</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl text-foreground sm:text-5xl lg:text-6xl">
            4 Barber Shop Locations in Bowie, Upper Marlboro &amp; Crofton MD
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Wherever you are in Prince George's or Anne Arundel County, there's a TNU chair ready
            for you. {HOURS_NOTE}.
          </p>
        </div>
      </section>

      <TrustBar />

      <section className="mx-auto max-w-7xl space-y-10 px-4 py-20 lg:px-8">
        {LOCATIONS.map((loc, idx) => {
          const mapQuery = encodeURIComponent(
            `${loc.street}, ${loc.city}, ${loc.state} ${loc.zip}`,
          );
          return (
            <article
              key={loc.slug}
              className={`grid gap-0 overflow-hidden rounded border border-border bg-card lg:grid-cols-2 ${
                idx % 2 ? "lg:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="p-8 lg:p-10">
                <p className="font-label text-xs tracking-widest text-gold">
                  LOCATION 0{idx + 1}
                </p>
                <h2 className="mt-2 font-display text-3xl text-foreground sm:text-4xl">
                  {loc.name}
                </h2>
                <ul className="mt-6 space-y-3 text-muted-foreground">
                  <li className="flex gap-3">
                    <MapPin className="mt-1 h-4 w-4 shrink-0 text-gold" />
                    <span>
                      {loc.street}, {loc.city}, {loc.state} {loc.zip}
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <Phone className="mt-1 h-4 w-4 shrink-0 text-gold" />
                    <a href={`tel:${loc.phoneTel}`} className="text-foreground hover:text-gold">
                      {loc.phone}
                    </a>
                  </li>
                  <li className="flex gap-3">
                    <Clock className="mt-1 h-4 w-4 shrink-0 text-gold" />
                    <span>Mon–Sat 9am–7pm · Sun by appointment</span>
                  </li>
                </ul>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={loc.bookerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-sm bg-gold px-6 py-3 text-sm font-semibold uppercase tracking-wider text-gold-foreground hover:bg-gold-soft"
                  >
                    Book at This Location <ExternalLink className="h-4 w-4" />
                  </a>
                  <a
                    href={`https://maps.google.com/?q=${mapQuery}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-sm border border-border px-6 py-3 text-sm font-semibold uppercase tracking-wider text-foreground hover:border-gold hover:text-gold"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
              <div className="min-h-72 bg-secondary">
                <iframe
                  title={`Map of ${loc.name}`}
                  src={`https://maps.google.com/maps?q=${mapQuery}&output=embed`}
                  loading="lazy"
                  className="h-full min-h-72 w-full grayscale-[60%]"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </article>
          );
        })}
      </section>

      <CtaSection
        eyebrow="WALK IN OR BOOK AHEAD"
        title="Pick your shop, claim your chair"
        subtitle="Booking opens in a new tab and only takes a minute."
        ctaLabel="Book Your Spot"
      />
    </>
  );
}
