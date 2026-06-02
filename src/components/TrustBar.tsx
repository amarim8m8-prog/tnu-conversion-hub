import { Star, Award, Scissors, Users } from "lucide-react";

const ITEMS = [
  { icon: Star, label: "20+ YEARS IN BUSINESS" },
  { icon: Award, label: "SMALL BIZ OF THE YEAR" },
  { icon: Scissors, label: "4 MARYLAND LOCATIONS" },
  { icon: Users, label: "MULTICULTURAL STAFF" },
];

export function TrustBar() {
  return (
    <div className="border-y border-border bg-card/40">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden md:grid-cols-4">
        {ITEMS.map((item) => (
          <div
            key={item.label}
            className="flex items-center justify-center gap-3 bg-background px-4 py-5"
          >
            <item.icon className="h-5 w-5 shrink-0 text-gold" aria-hidden />
            <span className="font-label text-xs tracking-widest text-foreground sm:text-sm">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
