"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import type { Testimonial } from "@/lib/data/testimonials";

const AUTOPLAY_INTERVAL_MS = 7000;

type TestimonialCarouselProps = {
  testimonials: Testimonial[];
};

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {direction === "left" ? (
        <path d="M15 18l-6-6 6-6" />
      ) : (
        <path d="M9 18l6-6-6-6" />
      )}
    </svg>
  );
}

function TestimonialSlide({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="mx-auto max-w-2xl text-center">
      <blockquote>
        <p className="text-lg font-light leading-[1.65] tracking-[-0.01em] text-foreground sm:text-xl">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </blockquote>
      <figcaption className="mt-8">
        <p className="editorial-label">{testimonial.context}</p>
        <p className="mt-2 text-base font-normal tracking-[-0.02em] text-foreground">
          {testimonial.author}
        </p>
        <p className="mt-1 text-sm font-light text-muted">
          {[testimonial.role, testimonial.company].filter(Boolean).join(", ")}
        </p>
      </figcaption>
    </figure>
  );
}

export default function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const total = testimonials.length;
  const active = testimonials[activeIndex];

  const goTo = useCallback(
    (index: number) => {
      setActiveIndex((index + total) % total);
    },
    [total],
  );

  const goNext = useCallback(() => {
    setActiveIndex((current) => (current + 1) % total);
  }, [total]);

  const goPrev = useCallback(() => {
    setActiveIndex((current) => (current - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    if (prefersReducedMotion || isPaused || total <= 1) return;

    const interval = window.setInterval(goNext, AUTOPLAY_INTERVAL_MS);
    return () => window.clearInterval(interval);
  }, [goNext, isPaused, prefersReducedMotion, total]);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "ArrowLeft") goPrev();
      if (event.key === "ArrowRight") goNext();
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goNext, goPrev]);

  if (!active) return null;

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setIsPaused(false);
        }
      }}
    >
      <div
        className="border-t border-border pt-12 sm:pt-14"
        aria-roledescription="carousel"
        aria-label="Client testimonials"
      >
        <div aria-live="polite" aria-atomic="true">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active.id}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={prefersReducedMotion ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] as const }}
            >
              <TestimonialSlide testimonial={active} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="mt-10 flex items-center justify-center gap-5 sm:mt-12">
        <button
          type="button"
          onClick={goPrev}
          aria-label="Previous testimonial"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-colors duration-300 hover:border-foreground/30 hover:text-foreground"
        >
          <ChevronIcon direction="left" />
        </button>

        <div className="flex items-center gap-2" role="tablist" aria-label="Select testimonial">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              type="button"
              role="tab"
              aria-selected={index === activeIndex}
              aria-label={`Testimonial ${index + 1}: ${testimonial.author}`}
              onClick={() => goTo(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "w-6 bg-foreground"
                  : "w-1.5 bg-border hover:bg-muted-light"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={goNext}
          aria-label="Next testimonial"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-colors duration-300 hover:border-foreground/30 hover:text-foreground"
        >
          <ChevronIcon direction="right" />
        </button>
      </div>
    </div>
  );
}
