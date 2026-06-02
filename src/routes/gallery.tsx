import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { useBooking } from "@/components/BookingDialog";
import { CtaSection } from "@/components/CtaSection";
import fade1 from "@/assets/gallery-fade-1.jpg";
import fade2 from "@/assets/gallery-fade-2.jpg";
import lineup1 from "@/assets/gallery-lineup-1.jpg";
import locs1 from "@/assets/gallery-locs-1.jpg";
import natural1 from "@/assets/gallery-natural-1.jpg";
import kids1 from "@/assets/gallery-kids-1.jpg";
import tools from "@/assets/gallery-tools.jpg";
import shop from "@/assets/gallery-shop.jpg";
import craft from "@/assets/barber-craft.jpg";

type Item = { src: string; alt: string; cat: string };
const ITEMS: Item[] = [
  { src: fade1, alt: "High top fade haircut by TNU barber", cat: "Fades" },
  { src: craft, alt: "Precision fade in progress at TNU Bowie", cat: "Fades" },
  { src: lineup1, alt: "Sharp beard lineup and taper fade", cat: "Lineups" },
  { src: fade2, alt: "Slicked back undercut by Tight N Up", cat: "Fades" },
  { src: locs1, alt: "Maintained shoulder-length locs by TNU loc artist", cat: "Locs" },
  { src: natural1, alt: "Natural curly hair shaped at TNU salon", cat: "Natural" },
  { src: kids1, alt: "Smiling kid with fresh fade at Tight N Up", cat: "Kids" },
  { src: shop, alt: "Interior of Tight N Up Barber Salon", cat: "Shop" },
  { src: tools, alt: "TNU barber tools laid out on leather", cat: "Shop" },
];

const FILTERS = ["All", "Fades", "Lineups", "Locs", "Natural", "Kids", "Shop"];

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Our Work | Tight N Up Barber Salon Maryland" },
      {
        name: "description",
        content:
          "See the cuts, fades, lineups, locs, and natural hair work from Tight N Up barbers across Bowie, Upper Marlboro & Crofton MD.",
      },
      { property: "og:title", content: "TNU Gallery — Our Work Speaks for Itself" },
      {
        property: "og:description",
        content: "Real cuts from real chairs at Tight N Up Barber Salon.",
      },
      { property: "og:url", content: "/gallery" },
      { property: "og:image", content: fade1 },
      { name: "twitter:image", content: fade1 },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const [active, setActive] = useState("All");
  const { open } = useBooking();
  const filtered = useMemo(
    () => (active === "All" ? ITEMS : ITEMS.filter((i) => i.cat === active)),
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
            A glimpse of the cuts, shapes, and styles coming out of TNU chairs every day.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="mb-8 flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
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
            <button
              key={item.src}
              onClick={open}
              className="group relative mb-4 block w-full overflow-hidden rounded border border-border"
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
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
            </button>
          ))}
        </div>
      </section>

      <CtaSection
        eyebrow="LOVE A LOOK?"
        title="Bring the reference. We'll bring the cut."
        ctaLabel="Reserve Your Chair"
      />
    </>
  );
}
