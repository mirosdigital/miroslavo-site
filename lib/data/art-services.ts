export type ArtServiceKey =
  | "collaborations"
  | "prints"
  | "livePainting"
  | "workshops";

export type ArtService = {
  key: ArtServiceKey;
  image: string;
  imagePosition?: string;
};

export const artServices: ArtService[] = [
  {
    key: "collaborations",
    image: "/art-services/oxcala-buoy-installation.png",
  },
  {
    key: "prints",
    image: "/art-services/prints-stack.jpg",
  },
  {
    key: "livePainting",
    image: "/art-services/noho-mural.png",
    imagePosition: "object-[72%_center]",
  },
  {
    key: "workshops",
    image: "/art-services/workshops.png",
  },
];
