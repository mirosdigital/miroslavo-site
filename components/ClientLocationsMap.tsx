"use client";

import {
  clientLocations,
  clientMapViewBox,
} from "@/lib/data/client-locations";
import { useReducedMotion } from "framer-motion";
import { useState } from "react";

const countryLabelClass =
  "text-[0.6875rem] font-medium uppercase tracking-[0.2em] transition-opacity duration-300";

export default function ClientLocationsMap() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="mx-auto w-full max-w-5xl">
      <div
        className="relative w-full opacity-90 dark:opacity-75"
        style={{ aspectRatio: `${clientMapViewBox.width} / ${clientMapViewBox.height}` }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/maps/world-min.svg"
          alt=""
          className="absolute inset-0 h-full w-full dark:brightness-[0.55] dark:contrast-[0.95]"
        />

        <svg
          viewBox={`0 0 ${clientMapViewBox.width} ${clientMapViewBox.height}`}
          className="absolute inset-0 h-full w-full"
          role="img"
          aria-label="World map showing client locations"
        >
          {clientLocations.map((location) => {
            const isActive = activeId === location.id;

            return (
              <g
                key={location.id}
                onMouseEnter={() => setActiveId(location.id)}
                onMouseLeave={() => setActiveId(null)}
                onFocus={() => setActiveId(location.id)}
                onBlur={() => setActiveId(null)}
                className="cursor-default"
              >
                {!prefersReducedMotion ? (
                  <circle
                    cx={location.x}
                    cy={location.y}
                    r={isActive ? 18 : 14}
                    className="fill-brand-turquoise/20 transition-all duration-500 dark:fill-brand-turquoise/25"
                  />
                ) : null}
                <circle
                  cx={location.x}
                  cy={location.y}
                  r={isActive ? 7 : 5.5}
                  className="fill-brand-turquoise stroke-background/80 stroke-[1.5] transition-all duration-300 dark:stroke-background/60"
                />
                <circle
                  cx={location.x}
                  cy={location.y}
                  r={16}
                  fill="transparent"
                  tabIndex={0}
                  role="button"
                  aria-label={location.name}
                >
                  <title>{location.name}</title>
                </circle>
              </g>
            );
          })}
        </svg>
      </div>

      <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
        {clientLocations.map((location) => {
          const isActive = activeId === location.id;
          const isDimmed = activeId && !isActive;

          return (
            <li
              key={location.id}
              className={`${countryLabelClass} ${
                isDimmed ? "text-muted/40" : isActive ? "text-foreground" : "text-muted"
              }`}
              onMouseEnter={() => setActiveId(location.id)}
              onMouseLeave={() => setActiveId(null)}
            >
              {location.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
