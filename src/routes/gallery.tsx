import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { BookButton } from "@/components/BookButton";
import { CtaSection } from "@/components/CtaSection";
import { GALLERY_FILTERS, GALLERY_ITEMS, IMAGES } from "@/lib/media";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Our Work | Tight N Up Barber Salon Maryland" },
      {
        name: "description",
        content:
          "Real cuts, fades, lineups, beard work, and natural styles from Tight N Up barbers across Bowie, Upper Marlboro & Crofton MD.",
      },
      { property: "og:title", content: "TNU Gallery — Our Work Speaks for Itself" },
      {
        property: "og:description",
        content: "Real cuts from real chairs at Tight N Up Barber Salon.",
      },
      { property: "og:url", content: "/gallery" },
      { property: "og:image", content: GALLERY_ITEMS[0]?.src ?? IMAGES.hero },
      { name: "twitter:image", content: GALLERY_ITEMS[0]?.src ?? IMAGES.hero },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const [active, setActive] = useState<(typeof GALLERY_FILTERS)[number]>("All");
  const filtered = useMemo(
    () => (active === "All" ? GALLERY_ITEMS : GALLERY_ITEMS.filter((i) => i.cat === active)),
    [active],
  );

  return (
    <>
      <section className="border-b border-border bg-card/30">
        <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
          <p className="font-label text-sm tracking-widest text-gold">PORTFOLIO</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl text-foreground sm:text-5xl lg:text-6xl">
            Our Work Speaks for Itself
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Real cuts from real chairs across our Bowie, Upper Marlboro, and Crofton shops.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="mb-8 flex flex-wrap gap-2">
          {GALLERY_FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setActive(f)}
              className={`rounded-full border px-4 py-1.5 font-label text-xs tracking-widest transition ${
                active === f
                  ? "border-gold bg-gold text-gold-foreground"
                  : "border-border bg-card text-muted-foreground hover:border-gold hover:text-foreground"
              }`}
            >
              {f.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {filtered.map((item) => (
            <BookButton
              key={item.src}
              className="group relative mb-4 block w-full cursor-pointer overflow-hidden rounded border border-border p-0 text-left"
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                width={800}
                height={1000}
                className="block w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-background/95 via-background/40 to-transparent opacity-0 transition group-hover:opacity-100">
                <div className="p-5 text-left">
                  <span className="font-label text-xs tracking-widest text-gold">
                    {item.cat.toUpperCase()}
                  </span>
                  <div className="mt-1 font-display text-lg text-foreground">
                    Want this look? Book now →
                  </div>
                </div>
              </div>
            </BookButton>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          Prefer to browse first?{" "}
          <Link to="/services" className="text-gold hover:underline">
            See our services
          </Link>{" "}
          or{" "}
          <Link to="/locations" className="text-gold hover:underline">
            find your nearest shop
          </Link>
          .
        </p>
      </section>

      <CtaSection
        eyebrow="LOVE A LOOK?"
        title="Bring the reference. We'll bring the cut."
        ctaLabel="Reserve Your Chair"
      />
    </>
  );
}
