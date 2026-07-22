"use client";

import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import type { LogoMark } from "@/types/content";

type LogoMarqueeProps = {
  logos: LogoMark[];
  reverse?: boolean;
  durationSeconds?: number;
};

function LogoItem({ logo }: { logo: LogoMark }) {
  const isImage = Boolean(logo.image);

  const content = isImage ? (
    <Image
      src={logo.image!}
      alt={logo.imageAlt ?? logo.name}
      width={160}
      height={48}
      className="press-logo-img h-8 w-auto max-w-[140px] object-contain sm:h-10 sm:max-w-[160px]"
    />
  ) : (
    <span className="whitespace-nowrap text-base font-medium tracking-tight text-muted sm:text-lg">
      {logo.name}
    </span>
  );

  const classes = `flex h-14 shrink-0 items-center justify-center px-6 transition duration-300 sm:h-16 sm:px-8 ${
    isImage
      ? "opacity-55 grayscale hover:opacity-100 hover:grayscale-0 dark:opacity-80 dark:hover:opacity-100 dark:hover:grayscale-0"
      : "opacity-70 hover:opacity-100"
  }`;

  if (logo.href) {
    return (
      <a
        href={logo.href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        aria-label={`${logo.name} — open website`}
      >
        {content}
      </a>
    );
  }

  return (
    <div className={classes} aria-label={logo.name}>
      {content}
    </div>
  );
}

export default function LogoMarquee({
  logos,
  reverse = false,
  durationSeconds = 48,
}: LogoMarqueeProps) {
  const prefersReducedMotion = useReducedMotion();

  if (logos.length === 0) return null;

  const loop = [...logos, ...logos];
  const animationStyle = prefersReducedMotion
    ? undefined
    : {
        animationDuration: `${durationSeconds}s`,
        animationDirection: reverse ? ("reverse" as const) : ("normal" as const),
      };

  return (
    <div className="relative overflow-hidden" aria-label="Press logos">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-surface via-surface/80 to-transparent sm:w-24"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-surface via-surface/80 to-transparent sm:w-24"
        aria-hidden
      />

      {prefersReducedMotion ? (
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 px-4">
          {logos.map((logo) => (
            <LogoItem key={logo.id} logo={logo} />
          ))}
        </div>
      ) : (
        <div
          className={`logo-marquee flex w-max items-center ${reverse ? "logo-marquee-reverse" : ""}`}
          style={animationStyle}
        >
          {loop.map((logo, index) => (
            <LogoItem key={`${logo.id}-${index}`} logo={logo} />
          ))}
        </div>
      )}
    </div>
  );
}
