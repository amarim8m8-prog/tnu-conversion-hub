/** Self-hosted images in /public/images — works on Vercel (not Lovable CDN paths). */
export const IMAGES = {
  hero: "/images/hero-shop.jpg",
  founder: "/images/barber-craft.jpg",
  logo: "/images/logo.png",
  products: "/images/products-line.jpg",
  locations: {
    "collington-plaza": "/images/locations/collington.gif",
    "mount-oak-plaza": "/images/locations/mount-oak.gif",
    "upper-marlboro": "/images/locations/upper-marlboro.jpg",
    "crofton-center": "/images/locations/crofton.jpg",
  },
} as const;

export type GalleryItem = { src: string; alt: string; cat: string };

export const GALLERY_ITEMS: GalleryItem[] = [
  { src: "/images/gallery/gallery-fade-1.jpg", alt: "Clean fade and lineup at Tight N Up", cat: "Fades" },
  { src: "/images/gallery/gallery-fade-2.jpg", alt: "Precision taper fade", cat: "Fades" },
  { src: "/images/gallery/img-4758.jpg", alt: "Fresh cut finish at TNU", cat: "Fades" },
  { src: "/images/gallery/img-4756.jpg", alt: "Sharp fade with defined edges", cat: "Fades" },
  { src: "/images/gallery/gallery-lineup-1.jpg", alt: "Razor-sharp lineup and beard sculpt", cat: "Lineups" },
  { src: "/images/gallery/img-3.jpg", alt: "Beard shape-up with clippers", cat: "Lineups" },
  { src: "/images/gallery/gallery-natural-1.jpg", alt: "Natural hair styling at TNU", cat: "Natural" },
  { src: "/images/gallery/img-10.jpg", alt: "Women's cut and style", cat: "Natural" },
  { src: "/images/gallery/gallery-kids-1.jpg", alt: "Kids cut at Tight N Up", cat: "Kids" },
  { src: "/images/gallery/gallery-locs-1.jpg", alt: "Locs maintenance and styling", cat: "Natural" },
  { src: "/images/gallery/gallery-shop.jpg", alt: "Busy chairs at TNU Bowie", cat: "Shop" },
  { src: "/images/gallery/gallery-tools.jpg", alt: "TNU clippers and grooming products", cat: "Shop" },
  { src: "/images/gallery/img-1.jpg", alt: "Barber at work in the shop", cat: "Shop" },
  { src: "/images/gallery/img-2.jpg", alt: "Client consultation in the chair", cat: "Shop" },
  { src: "/images/gallery/img-4.jpg", alt: "Finished cut — client ready to go", cat: "Fades" },
  { src: "/images/gallery/img-7.jpg", alt: "Detail work on a fresh fade", cat: "Fades" },
  { src: "/images/gallery/community.jpg", alt: "TNU community and team", cat: "Shop" },
];

export const GALLERY_FILTERS = ["All", "Fades", "Lineups", "Natural", "Kids", "Shop"] as const;
