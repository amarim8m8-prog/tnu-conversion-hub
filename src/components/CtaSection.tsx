import { useBooking } from "./BookingDialog";
import { PHONE, PHONE_TEL } from "@/lib/site-data";
import { Phone } from "lucide-react";

export function CtaSection({
  eyebrow = "READY?",
  title = "Your Next Fresh Cut is One Click Away",
  subtitle = "Reserve your chair at any of our 4 Maryland shops — booking takes 60 seconds.",
  ctaLabel = "Book Your Spot",
}: {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
}) {
  const { open } = useBooking();
  return (
    <section className="border-y border-border bg-card/30">
      <div className="mx-auto max-w-5xl px-4 py-20 text-center lg:px-8">
        <p className="font-label text-sm tracking-widest text-gold">{eyebrow}</p>
        <h2 className="mt-3 font-display text-4xl text-foreground sm:text-5xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">{subtitle}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={open}
            className="rounded-sm bg-gold px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-gold-foreground transition hover:bg-gold-soft"
          >
            {ctaLabel}
          </button>
          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex items-center gap-2 rounded-sm border border-border bg-transparent px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-foreground transition hover:border-gold hover:text-gold"
          >
            <Phone className="h-4 w-4" /> {PHONE}
          </a>
        </div>
      </div>
    </section>
  );
}
