import { siteConfig } from "@/lib/site";

export type OfferingKey = "art" | "design" | "marketing";

export type Offering = {
  key: OfferingKey;
  href: string;
  image: string;
  width: number;
  height: number;
  external?: boolean;
};

export const offerings: Offering[] = [
  {
    key: "art",
    href: "/works",
    image: "/offerings/art.png",
    width: 764,
    height: 1022,
  },
  {
    key: "design",
    href: "/design",
    image: "/offerings/design.jpg",
    width: 955,
    height: 1000,
  },
  {
    key: "marketing",
    href: siteConfig.mirosDigitalUrl,
    image: "/offerings/marketing.png",
    width: 937,
    height: 1000,
    external: true,
  },
];
