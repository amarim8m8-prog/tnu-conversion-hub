import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/site-data";

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % TESTIMONIALS.length), 6000);
    return () => clearInterval(id);
  }, []);
  const t = TESTIMONIALS[i];
  return (
    <div className="mx-auto max-w-3xl text-center">
      <div className="flex justify-center gap-1 text-gold" aria-label="5 star review">
        {[0, 1, 2, 3, 4].map((n) => (
          <Star key={n} className="h-5 w-5 fill-current" />
        ))}
      </div>
      <blockquote className="mt-6 font-display text-2xl leading-snug text-foreground sm:text-3xl">
        “{t.quote}”
      </blockquote>
      <div className="mt-5 font-label text-sm tracking-widest text-muted-foreground">
        — {t.name}
      </div>
      <div className="mt-6 flex justify-center gap-2">
        {TESTIMONIALS.map((_, n) => (
          <button
            key={n}
            type="button"
            onClick={() => setI(n)}
            aria-label={`Show testimonial ${n + 1}`}
            className={`h-1.5 w-6 rounded-full transition ${n === i ? "bg-gold" : "bg-border"}`}
          />
        ))}
      </div>
    </div>
  );
}
