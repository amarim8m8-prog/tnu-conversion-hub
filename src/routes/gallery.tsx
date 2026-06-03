import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { useBooking } from "@/components/BookingDialog";
import { CtaSection } from "@/components/CtaSection";
import tnu3 from "@/assets/gallery-real/tnu3.jpg.asset.json";
import tnu5 from "@/assets/gallery-real/tnu5.jpg.asset.json";
import tnu14 from "@/assets/gallery-real/tnu14.jpg.asset.json";
import tnu18 from "@/assets/gallery-real/tnu18.jpg.asset.json";
import tnu19 from "@/assets/gallery-real/tnu19.jpg.asset.json";
import fb1 from "@/assets/gallery-real/fb1.jpg.asset.json";
import fb2 from "@/assets/gallery-real/fb2.jpg.asset.json";
import fb3 from "@/assets/gallery-real/fb3.jpg.asset.json";
import fb4 from "@/assets/gallery-real/fb4.jpg.asset.json";
import fb5 from "@/assets/gallery-real/fb5.jpg.asset.json";
import fb6 from "@/assets/gallery-real/fb6.jpg.asset.json";
import fb7 from "@/assets/gallery-real/fb7.jpg.asset.json";
import img8429 from "@/assets/gallery-real/img8429.jpg.asset.json";
import img9814 from "@/assets/gallery-real/img9814.jpg.asset.json";
import img9907 from "@/assets/gallery-real/img9907.jpg.asset.json";
import img9961 from "@/assets/gallery-real/img9961.jpg.asset.json";
import salonA4 from "@/assets/gallery-real/salon-a4.jpg.asset.json";
import salonS2 from "@/assets/gallery-real/salon-s2.jpg.asset.json";

type Item = { src: string; alt: string; cat: string };
const ITEMS: Item[] = [
  { src: fb1.url, alt: "Full beard sculpt and clean fade by Tight N Up", cat: "Fades" },
  { src: fb4.url, alt: "360 waves with sharp temple lineup at TNU", cat: "Lineups" },
  { src: fb6.url, alt: "High top afro shaped with a clean fade", cat: "Natural" },
  { src: tnu14.url, alt: "Precision clipper fade in progress", cat: "Fades" },
  { src: tnu5.url, alt: "Tapered neckline with clipper work", cat: "Fades" },
  { src: tnu18.url, alt: "Kid getting a fresh fade at Tight N Up", cat: "Kids" },
  { src: tnu19.url, alt: "Mature gentleman with a polished side-part finish", cat: "Fades" },
  { src: tnu3.url, alt: "Beard scissor work — precision lineup", cat: "Lineups" },
  { src: fb2.url, alt: "Women's side-shave with sleek top by TNU stylist", cat: "Natural" },
  { src: img8429.url, alt: "Salt-and-pepper beard shape-up with clippers", cat: "Lineups" },
  { src: salonS2.url, alt: "Beard trim on a longtime customer at TNU", cat: "Lineups" },
  { src: img9907.url, alt: "Macro close-up of a razor-sharp lineup", cat: "Fades" },
  { src: img9961.url, alt: "TNU barber clippering a regular customer", cat: "Fades" },
  { src: salonA4.url, alt: "Barber finishing detail work on a young client", cat: "Shop" },
  { src: img9814.url, alt: "Smiling Tight N Up barber on the floor", cat: "Shop" },
  { src: fb5.url, alt: "Full house — every chair filled at TNU Bowie", cat: "Shop" },
  { src: fb3.url, alt: "TNU shears, clippers, and Antiseptic Skin & Scalp spray", cat: "Shop" },
  { src: fb7.url, alt: "Walk-Ins Welcome sign outside Tight N Up", cat: "Shop" },
];

const FILTERS = ["All", "Fades", "Lineups", "Natural", "Kids", "Shop"];

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
      { property: "og:image", content: fb1.url },
      { name: "twitter:image", content: fb1.url },
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
            Real cuts from real chairs across our Bowie, Upper Marlboro, and Crofton shops.
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
