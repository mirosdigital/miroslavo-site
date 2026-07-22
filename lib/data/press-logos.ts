import type { LogoMark } from "@/types/content";

export const pressLogos: LogoMark[] = [
  {
    id: "harvard",
    name: "Harvard",
    image: "/logos/press/harvard.png",
    imageAlt: "Harvard",
  },
  {
    id: "barcelona-city",
    name: "Barcelona City Council",
    image: "/logos/press/barcelona-city.png",
    imageAlt: "Barcelona City Council",
  },
  {
    id: "barcelona-welcome",
    name: "Barcelona International Welcome",
    image: "/logos/press/barcelona-welcome.png",
    imageAlt: "Barcelona International Welcome",
  },
  {
    id: "icub",
    name: "Institut de Cultura de Barcelona",
    image: "/logos/press/icub.png",
    imageAlt: "Institut de Cultura de Barcelona",
  },
  {
    id: "ateneu",
    name: "Ateneu Barcelonès",
    image: "/logos/press/ateneu.png",
    imageAlt: "Ateneu Barcelonès",
  },
  {
    id: "czechtrade",
    name: "CzechTrade",
    image: "/logos/press/czechtrade.png",
    imageAlt: "CzechTrade",
  },
  {
    id: "kudyznudy",
    name: "Kudy z nudy",
    image: "/logos/press/kudyznudy.png",
    imageAlt: "Kudy z nudy",
  },
  {
    id: "czechdesign",
    name: "Czechdesign",
    image: "/logos/press/czechdesign.jpg",
    imageAlt: "Czechdesign",
  },
  {
    id: "aesthetica",
    name: "Aesthetica",
    image: "/logos/press/aesthetica.png",
    imageAlt: "Aesthetica Magazine",
  },
  {
    id: "ilovecreatives",
    name: "I Love Creatives",
    image: "/logos/press/ilovecreatives.png",
    imageAlt: "I Love Creatives",
  },
  {
    id: "prima-zena",
    name: "Prima Žena",
    image: "/logos/press/prima-zena.webp",
    imageAlt: "Prima Žena",
  },
];

export function getPressLogos(): LogoMark[] {
  return pressLogos;
}
