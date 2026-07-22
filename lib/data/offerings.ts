import { siteConfig } from "@/lib/site";

export type OfferingKey = "art" | "design" | "marketing";

export type Offering = {
  key: OfferingKey;
  href: string;
  image: string;
  external?: boolean;
};

export const offerings: Offering[] = [
  {
    key: "art",
    href: "/works",
    image: "/offerings/art.png",
  },
  {
    key: "design",
    href: "/design",
    image: "/offerings/design.jpg",
  },
  {
    key: "marketing",
    href: siteConfig.mirosDigitalUrl,
    image: "/offerings/marketing.png",
    external: true,
  },
];
