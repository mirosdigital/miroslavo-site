import TestimonialCarousel from "@/components/TestimonialCarousel";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import SectionLabel from "@/components/ui/SectionLabel";
import { testimonials } from "@/lib/data/testimonials";
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
      </Reveal>

      <Reveal delay={0.06} className="mx-auto mt-12 max-w-3xl lg:mt-14">
        <TestimonialCarousel testimonials={testimonials} />
      </Reveal>
    </Section>
  );
}
