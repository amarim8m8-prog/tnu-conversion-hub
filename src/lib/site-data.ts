import { IMAGES } from "@/lib/media";

export const PHONE = "(301) 430-5264";
export const PHONE_TEL = "+13014305264";
export const EMAIL = "cbtruesdale1@gmail.com";
export const FACEBOOK_URL = "https://www.facebook.com/TightNUpBarberSalon";
export const INSTAGRAM_URL = "https://instagram.com/tightnup_barbersalon";

export type Location = {
  slug: string;
  name: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  phoneTel: string;
  bookerUrl: string;
  geo: { lat: number; lng: number };
  image: string;
};

export const LOCATIONS: Location[] = [
  {
    slug: "collington-plaza",
    name: "Collington Plaza — Bowie",
    street: "3532 Crain Hwy",
    city: "Bowie",
    state: "MD",
    zip: "20716",
    phone: "(301) 430-5264",
    phoneTel: "+13014305264",
    bookerUrl: "https://go.booker.com/location/TIGHTNUPWORKSCRAIN/service-menu",
    geo: { lat: 38.9595, lng: -76.7314 },
    image: IMAGES.locations["collington-plaza"],
  },
  {
    slug: "mount-oak-plaza",
    name: "Mount Oak Plaza — Bowie",
    street: "15708 Mount Oak Road",
    city: "Bowie",
    state: "MD",
    zip: "20716",
    phone: "(301) 430-5100",
    phoneTel: "+13014305100",
    bookerUrl: "https://go.booker.com/location/TIGHTNUPWORKSLLC/service-menu",
    geo: { lat: 38.9342, lng: -76.7218 },
    image: IMAGES.locations["mount-oak-plaza"],
  },
  {
    slug: "upper-marlboro",
    name: "Upper Marlboro",
    street: "5747 Crain Highway",
    city: "Upper Marlboro",
    state: "MD",
    zip: "20772",
    phone: "(240) 339-1148",
    phoneTel: "+12403391148",
    bookerUrl: "https://go.booker.com/location/TNUUpperMarlboro/service-menu",
    geo: { lat: 38.8156, lng: -76.7497 },
    image: IMAGES.locations["upper-marlboro"],
  },
  {
    slug: "crofton-center",
    name: "Crofton Center",
    street: "1659 Crofton Center",
    city: "Crofton",
    state: "MD",
    zip: "21114",
    phone: "(443) 292-4444",
    phoneTel: "+14432924444",
    bookerUrl: "https://go.booker.com/location/TIGHTNUPWORKSCROFTON/service-menu",
    geo: { lat: 39.0123, lng: -76.6855 },
    image: IMAGES.locations["crofton-center"],
  },
];

export const HOURS_NOTE = "Mon–Sat 9am–7pm · Sun by appointment · Call to confirm";

export const TESTIMONIALS = [
  {
    quote:
      "It doesn't matter who you go to! Everyone at TNU can cut very well! Keep up the good work Clinton!",
    name: "John O.",
  },
  {
    quote: "Great atmosphere with a friendly staff!",
    name: "Vince M.",
  },
  {
    quote:
      "First time barbershop experience. I recently went natural and came to the barbershop to get it shaped up. CJ did an excellent job. Ladies, if you are in need of a barber check CJ out — he will not disappoint.",
    name: "Donna F.",
  },
  {
    quote:
      "I'm from Pennsylvania but visit Bowie often. I always look forward to leaving with the freshest cut from Tight-N-Up. You can tell Clinton runs an outstanding business. Jonathan got me looking fresh for Amsterdam this week.",
    name: "Eric J.",
  },
  {
    quote:
      "Go see Q. One of the great barbers the owner has took under his wing. The shop is clean, bright and located right in Bowie.",
    name: "Que D.",
  },
  {
    quote:
      "Great service. Friendly atmosphere, reasonable prices. All barbers enjoy cutting hair.",
    name: "Shatungwa",
  },
  {
    quote: "Extremely professional and completely about customer satisfaction!",
    name: "Derrick C.",
  },
  {
    quote: "These are my Barbers in whom I am well pleased.",
    name: "Marion",
  },
];
