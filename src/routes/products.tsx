import { createFileRoute } from "@tanstack/react-router";
import { CtaSection } from "@/components/CtaSection";
import { IMAGES } from "@/lib/media";
import { Droplets, Sparkles, Leaf, Shield } from "lucide-react";

const PRODUCTS = [
  {
    icon: Droplets,
    name: "Hair & Scalp Shampoo",
    desc: "Gentle daily cleanser formulated for every hair type. Removes buildup without stripping natural oils.",
    benefits: ["Sulfate-free", "Daily use", "Hydrates scalp"],
  },
  {
    icon: Shield,
    name: "Bump B Gone",
    desc: "Post-shave treatment that prevents razor bumps and ingrown hairs. A TNU staple for clean lineups.",
    benefits: ["Soothes razor burn", "Prevents bumps", "Fast absorbing"],
  },
  {
    icon: Leaf,
    name: "Nappi Curl Twisting Crème",
    desc: "Definition, hold, and shine for natural curls, twists, and coils. Made with botanical conditioners.",
    benefits: ["Defines curls", "All-day hold", "No flaking"],
  },
  {
    icon: Sparkles,
    name: "Hair & Scalp Antiseptic",
    desc: "Cooling antiseptic spray for itch relief and scalp clarity. Used in every TNU chair.",
    benefits: ["Relieves itch", "Refreshes scalp", "Professional grade"],
  },
];

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "TNU Hair & Skin Care Products | Tight N Up Barber Salon" },
      {
        name: "description",
        content:
          "Professional hair and skin care products from Tight N Up — Hair & Scalp Shampoo, Bump B Gone, Nappi Curl Twisting Crème, and more. Available in-store.",
      },
      { property: "og:title", content: "TNU Professional Hair & Skin Care Products" },
      {
        property: "og:description",
        content: "Pro-grade grooming products available at all 4 TNU Maryland shops.",
      },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <>
      <section className="border-b border-border bg-card/30">
        <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
          <p className="font-label text-sm tracking-widest text-gold">TNU GROOMING LINE</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl text-foreground sm:text-5xl lg:text-6xl">
            TNU Professional Hair &amp; Skin Care Products
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            The same products our barbers use in the chair — picked because they actually work,
            on every texture. Available at all 4 TNU shops.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-8 lg:px-8">
        <img
          src={IMAGES.products}
          alt="Tight N Up professional hair and skin care product line"
          loading="lazy"
          className="w-full rounded border border-border object-cover"
        />
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2">
          {PRODUCTS.map((p) => (
            <article
              key={p.name}
              className="flex flex-col rounded border border-border bg-card p-8 transition hover:border-gold"
            >
              <div className="flex items-center justify-between">
                <p.icon className="h-7 w-7 text-gold" />
                <span className="rounded-full border border-gold/50 px-3 py-1 font-label text-xs tracking-widest text-gold">
                  AVAILABLE IN-STORE
                </span>
              </div>
              <h2 className="mt-5 font-display text-2xl text-foreground">{p.name}</h2>
              <p className="mt-3 text-muted-foreground">{p.desc}</p>
              <ul className="mt-5 grid gap-2 text-sm text-muted-foreground">
                {p.benefits.map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-gold" />
                    {b}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <CtaSection
        eyebrow="PICK UP IN SHOP"
        title="Stop by any TNU location"
        subtitle="Ask your barber to add product to your service — or grab it on the way out."
        ctaLabel="Find a Location"
      />
    </>
  );
}
