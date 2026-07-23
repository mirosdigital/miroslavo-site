import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import SectionLabel from "@/components/ui/SectionLabel";
import {
  facebookReviewsUrl,
  googleReviewsUrl,
  testimonials,
} from "@/lib/data/testimonials";
import { getTranslations } from "next-intl/server";

export default async function Testimonials() {
  const t = await getTranslations("testimonials");

  return (
    <Section wide className="border-t border-border bg-background" ariaLabelledby="testimonials-heading">
      <Reveal className="mx-auto max-w-2xl text-center">
        <SectionLabel>{t("eyebrow")}</SectionLabel>
        <h2
          id="testimonials-heading"
          className="mt-6 text-[clamp(2rem,3.5vw,3rem)] font-light leading-[1.1] tracking-[-0.03em] text-foreground"
        >
          {t("title")}
        </h2>
        <p className="mt-6 text-base font-light leading-[1.75] text-muted">{t("description")}</p>
      </Reveal>

      <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:mt-20 lg:gap-12">
        {testimonials.map((item, index) => (
          <Reveal key={item.id} delay={index * 0.06}>
            <figure className="flex h-full flex-col border-t border-border pt-8">
              <blockquote className="flex-1">
                <p className="text-lg font-light leading-[1.65] tracking-[-0.01em] text-foreground">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </blockquote>
              <figcaption className="mt-8">
                <p className="editorial-label">{item.context}</p>
                <p className="mt-2 text-base font-normal tracking-[-0.02em] text-foreground">
                  {item.author}
                </p>
                <p className="mt-1 text-sm font-light text-muted">
                  {[item.role, item.company].filter(Boolean).join(", ")}
                </p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.12} className="mt-14 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-center lg:mt-16">
        <a
          href={facebookReviewsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-light text-muted underline-offset-4 transition-colors duration-300 hover:text-foreground hover:underline"
        >
          {t("facebookCta")}
        </a>
        <span className="hidden text-muted/40 sm:inline" aria-hidden="true">
          ·
        </span>
        <a
          href={googleReviewsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-light text-muted underline-offset-4 transition-colors duration-300 hover:text-foreground hover:underline"
        >
          {t("googleCta")}
        </a>
      </Reveal>
    </Section>
  );
}
