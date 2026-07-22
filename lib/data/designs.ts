export type DesignCategory =
  | "branding"
  | "industrial"
  | "product"
  | "graphic"
  | "digital"
  | "livePainting"
  | "artCommission"
  | "donation"
  | "collaboration";

export type DesignProject = {
  id: string;
  title: string;
  category: Exclude<DesignCategory, "collaboration">;
  description: string;
  image: string;
  imageAlt: string;
  aspect?: "square" | "landscape" | "portrait";
  imageClassName?: string;
};

export type DesignCommission = {
  id: string;
  title: string;
  client: string;
  date: string;
  category: DesignCategory;
  description: string;
  image: string;
  imageAlt: string;
  aspect?: "square" | "landscape" | "portrait";
  imageClassName?: string;
};

export const designPortfolioGroups = [
  "industrial",
  "product",
  "branding",
  "graphic",
  "digital",
] as const satisfies readonly Exclude<DesignCategory, "collaboration">[];

export const designPortfolioSections: {
  id: string;
  categories: readonly Exclude<DesignCategory, "collaboration">[];
  labelKey?: (typeof designPortfolioGroups)[number];
}[] = [
  { id: "industrial", categories: ["industrial"], labelKey: "industrial" },
  { id: "product", categories: ["product"], labelKey: "product" },
  {
    id: "branding-graphic",
    categories: ["branding", "graphic"],
    labelKey: "branding",
  },
  { id: "digital", categories: ["digital"], labelKey: "digital" },
];

export const designProjects: DesignProject[] = [
  {
    id: "wheelbarrow",
    title: "Wheelbarrow",
    category: "industrial",
    description:
      "Garden wheelbarrow with patented innovations — functional form for everyday use.",
    image: "/design/wheelbarrow.jpg",
    imageAlt: "Wheelbarrow industrial design by Miroslavo",
    aspect: "landscape",
  },
  {
    id: "spatchel",
    title: "Spatchel",
    category: "industrial",
    description:
      "A spatula reimagined for artists and painters — industrial design for the studio.",
    image: "/design/spatchel.jpg",
    imageAlt: "Spatchel industrial design by Miroslavo",
    aspect: "square",
  },
  {
    id: "flourishing-shot-glass",
    title: "Flourishing Shot Glass",
    category: "industrial",
    description:
      "A’ Design Award winner — Mayan-inspired shot glass, sculptural form in glass and colour.",
    image: "/design/flourishing-shot-glass.jpg",
    imageAlt: "Flourishing shot glass industrial design by Miroslavo",
    aspect: "portrait",
  },
  {
    id: "protronix-sensor",
    title: "Protronix Air Quality Sensor",
    category: "industrial",
    description:
      "Industrial design for consumer electronics — duct-mounted and enclosure concepts for Protronix s.r.o.",
    image: "/design/protronix-aqs-v10.png",
    imageAlt: "Protronix air quality sensor industrial design by Miroslavo",
    aspect: "landscape",
  },
  {
    id: "bicoaster",
    title: "Bicoaster",
    category: "product",
    description:
      "Electronic coaster with cooling and heating — playful product design for the home.",
    image: "/design/bicoaster.png",
    imageAlt: "Bicoaster product design by Miroslavo",
    aspect: "landscape",
  },
  {
    id: "slixy-watch",
    title: "SLIXY Watch",
    category: "product",
    description:
      "A’ Design Award winner — minimal watch design for young people who love colour and play.",
    image: "/design/slixy-watch.jpg",
    imageAlt: "SLIXY watch product design by Miroslavo",
    aspect: "landscape",
  },
  {
    id: "isotra-roller-blind",
    title: "Isotra Roller Blind",
    category: "product",
    description:
      "Fabric roller blind designed for ISOTRA a.s. — pleasant form for everyday households.",
    image: "/design/isotra-roller-blind.jpg",
    imageAlt: "Isotra roller blind product design by Miroslavo",
    aspect: "landscape",
  },
  {
    id: "necklace",
    title: "Custom Necklace",
    category: "product",
    description: "Bespoke jewellery piece — authorial form designed for a private client.",
    image: "/design/necklace.jpg",
    imageAlt: "Custom necklace design by Miroslavo",
    aspect: "portrait",
    imageClassName: "object-[center_72%]",
  },
  {
    id: "mall-pay",
    title: "Mall Pay",
    category: "branding",
    description: "Credit card and visual identity design for Mall Pay.",
    image: "/design/mall-pay.jpg",
    imageAlt: "Mall Pay credit card branding design by Miroslavo",
    aspect: "landscape",
  },
  {
    id: "nescafe-azera",
    title: "Nescafé Azera",
    category: "graphic",
    description: "Label illustration and packaging graphics for city life.",
    image: "/design/nescafe-azera.jpg",
    imageAlt: "Nescafé Azera label design illustration by Miroslavo",
    aspect: "square",
  },
  {
    id: "artist-rebel-hoodie",
    title: "Artist Rebel Hoodie Mascot",
    category: "graphic",
    description:
      "Character mascot and artwear graphic for the Artist Rebel hoodie — playful studio identity on streetwear.",
    image: "/design/artist-rebel-hoodie.jpg",
    imageAlt: "Artist Rebel hoodie mascot design by Miroslavo",
    aspect: "portrait",
  },
  {
    id: "bakery-tshirt",
    title: "T-Shirt Design for Bakery",
    category: "graphic",
    description:
      "Star-heart graphic and sleeve branding for Stibůrkovo pekařství — with AI-powered fashion model mockup.",
    image: "/design/bakery-tshirt.png",
    imageAlt: "T-shirt design for Stibůrkovo bakery by Miroslavo",
    aspect: "portrait",
    imageClassName: "object-[center_20%]",
  },
  {
    id: "hylka-web",
    title: "Hylka.com",
    category: "digital",
    description: "WordPress site design and development for Hylka.",
    image: "/design/hylka-web.png",
    imageAlt: "Hylka.com website design by Miroslavo",
    aspect: "landscape",
    imageClassName: "object-[center_top]",
  },
  {
    id: "miros-digital-web",
    title: "Miros.digital",
    category: "digital",
    description:
      "Strategy, websites, and growth marketing — the commercial practice for entrepreneurs and organisations.",
    image: "/design/miros-digital-web.png",
    imageAlt: "Miros.digital website design by Miroslavo",
    aspect: "landscape",
    imageClassName: "object-[center_top]",
  },
];

export const designCommissions: DesignCommission[] = [
  {
    id: "lust-barcelona",
    title: "Lust",
    client: "Private commission — Costa Brava, Spain",
    date: "Jun 2022",
    category: "artCommission",
    description:
      "Two paintings exploring lust and power — commissioned for a client on the Costa Brava.",
    image: "/commissions/lust-barcelona.jpg",
    imageAlt: "Lust abstract painting commission by Miroslavo, Barcelona",
    aspect: "portrait",
  },
  {
    id: "freedom-atlanta",
    title: "Freedom",
    client: "Private commission — Atlanta, USA",
    date: "Sep 2022",
    category: "artCommission",
    description:
      "Large abstract painting for a client in Atlanta — freedom, independence, and expression woven into colour, text, and gesture.",
    image: "/commissions/freedom-atlanta.jpg",
    imageAlt: "Freedom abstract painting commission by Miroslavo, Atlanta USA",
    aspect: "portrait",
  },
  {
    id: "peace-barcelona",
    title: "Peace",
    client: "Club 23, Barcelona",
    date: "Aug 2024",
    category: "artCommission",
    description:
      "Abstract painting commissioned for Club 23 in Barcelona — calm energy in a vibrant hospitality setting.",
    image: "/commissions/peace-barcelona.jpg",
    imageAlt: "Peace abstract painting commission by Miroslavo, Barcelona",
    aspect: "portrait",
  },
  {
    id: "big-bang-madrid",
    title: "Big Bang",
    client: "Cámara de Comercio Hispano-Checa",
    date: "2025",
    category: "artCommission",
    description:
      "Commissioned painting for the Hispanic-Czech Chamber of Commerce — unveiled in Madrid.",
    image: "/commissions/big-bang-madrid.jpg",
    imageAlt: "Big Bang painting commission by Miroslavo, Madrid",
    aspect: "portrait",
  },
  {
    id: "hearts-of-steel",
    title: "Hearts of Steel",
    client: "Private commission — Mníšek, Czechia",
    date: "Jan 2026",
    category: "artCommission",
    description:
      "Custom painting for a family of four in their new home — four hearts for each member, made to commemorate the birth of their baby girl.",
    image: "/commissions/hearts-of-steel.jpg",
    imageAlt: "Hearts of Steel family commission painting by Miroslavo",
    aspect: "portrait",
  },
  {
    id: "with-love-converse",
    title: "With Love, Miroslavo.",
    client: "Authorial art project",
    date: "Jun 2026",
    category: "artCommission",
    description:
      "Hand-painted Converse shoes — authorial artwear with AI-powered product presentation.",
    image: "/commissions/with-love-converse.png",
    imageAlt: "Hand-painted Converse shoes by Miroslavo",
    aspect: "portrait",
  },
];

export const designCategories: DesignCategory[] = [
  "industrial",
  "product",
  "branding",
  "graphic",
  "digital",
  "livePainting",
  "artCommission",
  "donation",
  "collaboration",
];
