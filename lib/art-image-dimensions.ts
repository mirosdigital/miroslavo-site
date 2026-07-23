/** Pixel dimensions of files in public/art — used for correct display aspect ratios. */
export const artImageDimensions: Record<string, { width: number; height: number }> = {
  "/art/big-bang.jpg": { width: 1300, height: 1300 },
  "/art/contra-nature.jpg": { width: 839, height: 1024 },
  "/art/crowned.jpg": { width: 1536, height: 1350 },
  "/art/dances-with-chaos.jpg": { width: 2500, height: 2053 },
  "/art/dancing-queen.jpg": { width: 2025, height: 2560 },
  "/art/decisive.jpg": { width: 2434, height: 2439 },
  "/art/foundations.jpg": { width: 1678, height: 2048 },
  "/art/full-bloom.jpg": { width: 2560, height: 2025 },
  "/art/home-sweet-home.jpg": { width: 1500, height: 1870 },
  "/art/luchador.jpg": { width: 2014, height: 2560 },
  "/art/on-the-edge-of-freedom.jpg": { width: 1216, height: 1536 },
  "/art/one-love.jpg": { width: 2560, height: 2035 },
  "/art/queens-landing.jpg": { width: 2104, height: 2560 },
  "/art/resurrection.jpg": { width: 1500, height: 1831 },
  "/art/spread-your-wings.jpg": { width: 2140, height: 2560 },
};

export function getArtAspectRatio(image: string): number {
  const dimensions = artImageDimensions[image];
  if (!dimensions) {
    return 4 / 5;
  }

  return dimensions.width / dimensions.height;
}

export function getArtImageDimensions(image: string): { width: number; height: number } {
  return artImageDimensions[image] ?? { width: 4, height: 5 };
}
