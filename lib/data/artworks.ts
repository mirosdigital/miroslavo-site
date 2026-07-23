export type Artwork = {
  id: string;
  title: string;
  category: "painting" | "print";
  image: string;
  imageAlt: string;
  featured?: boolean;
};

export const artworks: Artwork[] = [
  {
    id: "dances-with-chaos",
    title: "Dances with Chaos",
    category: "painting",
    image: "/art/dances-with-chaos.jpg",
    imageAlt: "Dances with Chaos — abstract painting by Miroslavo",
    featured: true,
  },
  {
    id: "home-sweet-home",
    title: "Home Sweet Home",
    category: "painting",
    image: "/art/home-sweet-home.jpg",
    imageAlt: "Home Sweet Home — contemporary abstract painting by Miroslavo",
  },
  {
    id: "dancing-queen",
    title: "Dancing Queen",
    category: "painting",
    image: "/art/dancing-queen.jpg",
    imageAlt: "Dancing Queen — abstract painting by Miroslavo",
  },
  {
    id: "luchador",
    title: "Luchador",
    category: "painting",
    image: "/art/luchador.jpg",
    imageAlt: "Luchador — abstract painting by Miroslavo",
  },
  {
    id: "contra-nature",
    title: "Contra Nature",
    category: "painting",
    image: "/art/contra-nature.jpg",
    imageAlt: "Contra Nature — green and gold abstract painting by Miroslavo",
  },
  {
    id: "spread-your-wings",
    title: "Spread Your Wings and Fly",
    category: "painting",
    image: "/art/spread-your-wings.jpg",
    imageAlt: "Spread Your Wings and Fly — abstract painting by Miroslavo",
  },
  {
    id: "resurrection",
    title: "Resurrection",
    category: "painting",
    image: "/art/resurrection.jpg",
    imageAlt: "Resurrection — abstract painting by Miroslavo",
  },
  {
    id: "queens-landing",
    title: "Queen's Landing",
    category: "painting",
    image: "/art/queens-landing.jpg",
    imageAlt: "Queen's Landing — abstract painting by Miroslavo",
  },
];
