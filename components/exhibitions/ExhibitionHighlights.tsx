import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { exhibitionHighlights } from "@/lib/data/exhibitions";

const aspectClasses = {
  square: "aspect-square",
  landscape: "aspect-[4/3]",
  portrait: "aspect-[4/5]",
} as const;

export default function ExhibitionHighlights() {
  const lastIndex = exhibitionHighlights.length - 1;

  return (
    <div className="grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:gap-x-10 lg:gap-y-20">
      {exhibitionHighlights.map((item, index) => (
        <Reveal
          key={item.id}
          delay={index * 0.06}
          className={
            index === lastIndex && exhibitionHighlights.length % 2 !== 0
              ? "sm:col-span-2 sm:max-w-lg"
              : ""
          }
        >
          <article className="group">
            <div
              className={`relative overflow-hidden bg-surface-muted ${aspectClasses[item.aspect ?? "landscape"]}`}
            >
              <Image
                src={item.image}
                alt={item.imageAlt}
                fill
                className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.015]"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
            <div className="mt-6 border-t border-border pt-6">
              <p className="editorial-label">
                {item.date} · {item.location}
              </p>
              <h2 className="mt-2 text-xl font-normal tracking-[-0.02em] text-foreground">
                {item.title}
              </h2>
              <p className="mt-3 max-w-md text-sm font-light leading-relaxed text-muted">
                {item.description}
              </p>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
