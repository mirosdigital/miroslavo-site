import type { Artwork } from "@/lib/data/artworks";

export type WorkStatus = "available" | "sold";

export type AvailableWork = Artwork & {
  price: number;
  currency?: "EUR";
  medium?: string;
  size?: string;
  status?: WorkStatus;
};

/** Subset of paintings currently offered — prices synced from miroslavo.com shop. */
export const availableWorks: AvailableWork[] = [
  {
    id: "dances-with-chaos",
    title: "Dances with Chaos",
    category: "painting",
    image: "/art/dances-with-chaos.jpg",
    imageAlt: "Dances with Chaos — abstract painting by Miroslavo",
    price: 1000,
    medium: "Acrylic on canvas",
    size: "60 × 73 cm",
  },
  {
    id: "home-sweet-home",
    title: "Home Sweet Home",
    category: "painting",
    image: "/art/home-sweet-home.jpg",
    imageAlt: "Home Sweet Home — contemporary abstract painting by Miroslavo",
    price: 200,
    medium: "Acrylic on canvas",
    size: "27 × 22 cm",
  },
  {
    id: "queens-landing",
    title: "Queen's Landing",
    category: "painting",
    image: "/art/queens-landing.jpg",
    imageAlt: "Queen's Landing — abstract painting by Miroslavo",
    price: 600,
    medium: "Acrylic on canvas",
    size: "46 × 38 cm",
  },
  {
    id: "decisive",
    title: "Decisive",
    category: "painting",
    image: "/art/decisive.jpg",
    imageAlt: "Decisive — abstract painting by Miroslavo",
    price: 2000,
    medium: "Acrylic on canvas",
    size: "100 × 100 cm",
    status: "sold",
  },
  {
    id: "spread-your-wings",
    title: "Spread Your Wings and Fly",
    category: "painting",
    image: "/art/spread-your-wings.jpg",
    imageAlt: "Spread Your Wings and Fly — abstract painting by Miroslavo",
    price: 800,
    medium: "Acrylic on canvas",
    size: "61 × 50 cm",
  },
  {
    id: "resurrection",
    title: "Resurrection",
    category: "painting",
    image: "/art/resurrection.jpg",
    imageAlt: "Resurrection — abstract painting by Miroslavo",
    price: 300,
    medium: "Acrylic on canvas",
    size: "40 × 33 cm",
  },
  {
    id: "foundations",
    title: "Foundations",
    category: "painting",
    image: "/art/foundations.jpg",
    imageAlt: "Foundations — colourful abstract painting by Miroslavo",
    price: 1500,
    medium: "Acrylic on canvas",
  },
  {
    id: "crowned",
    title: "Crowned",
    category: "painting",
    image: "/art/crowned.jpg",
    imageAlt: "Crowned — colourful abstract painting by Miroslavo",
    price: 1600,
    medium: "Acrylic on canvas",
  },
  {
    id: "big-bang",
    title: "Big Bang",
    category: "painting",
    image: "/art/big-bang.jpg",
    imageAlt: "Big Bang — colourful abstract painting by Miroslavo",
    price: 2500,
    medium: "Acrylic on canvas",
    status: "sold",
  },
  {
    id: "on-the-edge-of-freedom",
    title: "On The Edge of Freedom",
    category: "painting",
    image: "/art/on-the-edge-of-freedom.jpg",
    imageAlt: "On The Edge of Freedom — abstract painting by Miroslavo",
    price: 1600,
    medium: "Acrylic on canvas",
    status: "sold",
  },
  {
    id: "full-bloom",
    title: "Full Bloom",
    category: "painting",
    image: "/art/full-bloom.jpg",
    imageAlt: "Full Bloom — colourful abstract painting by Miroslavo",
    price: 1650,
    medium: "Acrylic on canvas",
    status: "sold",
  },
  {
    id: "one-love",
    title: "One Love",
    category: "painting",
    image: "/art/one-love.jpg",
    imageAlt: "One Love — abstract heart painting by Miroslavo",
    price: 1200,
    medium: "Acrylic on canvas",
    status: "sold",
  },
];
