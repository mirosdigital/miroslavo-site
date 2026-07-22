export type ClientLocation = {
  id: string;
  name: string;
  /** Map coordinates in @svg-maps/world viewBox (1010×666) */
  x: number;
  y: number;
};

/**
 * Pin positions aligned to country shapes on the map SVG (MapSVG / @svg-maps/world).
 * Derived from path centroids — not lat/lng equirectangular projection.
 */
export const clientLocations: ClientLocation[] = [
  { id: "spain", name: "Spain", x: 463, y: 325 },
  { id: "czechia", name: "Czechia", x: 518.29, y: 302 },
  { id: "united-kingdom", name: "United Kingdom", x: 465.92, y: 274.25 },
  { id: "mexico", name: "Mexico", x: 187.09, y: 394.09 },
  { id: "united-states", name: "United States", x: 143.62, y: 290.99 },
  { id: "switzerland", name: "Switzerland", x: 497.94, y: 314.67 },
  { id: "france", name: "France", x: 481.62, y: 316.12 },
];

export const clientMapViewBox = {
  width: 1010,
  height: 666,
};
