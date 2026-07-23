import Image from "next/image";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import SectionLabel from "@/components/ui/SectionLabel";
import { offerings } from "@/lib/data/offerings";
import { getSectionId } from "@/lib/i18n/paths";
import { getTranslations } from "next-intl/server";

export default async function Practice() {
  const t = await getTranslations("practice");

  return (
    <Section
      id={getSectionId("practice")}
      ariaLabelledby="practice-heading"
      wide
      className="border-t border-border bg-background"
    >
      <Reveal className="max-w-2xl">
        <SectionLabel>{t("eyebrow")}</SectionLabel>
        <h2
          id="practice-heading"
          className="mt-6 text-[clamp(2rem,3.5vw,3rem)] font-light leading-[1.1] tracking-[-0.03em] text-foreground"
        >
          {t("title")}
        </h2>
        <p className="mt-8 max-w-xl text-base font-light leading-[1.75] text-muted">
          {t("description")}
        </p>
      </Reveal>

      <div className="mt-20 grid gap-20 sm:grid-cols-2 lg:mt-28 lg:grid-cols-3 lg:gap-12">
        {offerings.map((offering, index) => (
          <Reveal key={offering.key} delay={index * 0.08}>
            <article className="group">
              <div className="relative w-full bg-surface-muted">
                <Image
                  src={offering.image}
                  alt={t(`offerings.${offering.key}.imageAlt`)}
                  width={offering.width}
                  height={offering.height}
                  className="h-auto w-full"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              <div className="mt-6 border-t border-border pt-6">
                <h3 className="text-xl font-normal tracking-[-0.02em] text-foreground">
                  {t(`offerings.${offering.key}.title`)}
                </h3>
                <p className="mt-4 text-sm font-light leading-[1.75] text-muted">
                  {t(`offerings.${offering.key}.description`)}
                </p>
                <div className="mt-8">
                  <Button href={offering.href} external={offering.external} variant="secondary">
                    {t(`offerings.${offering.key}.cta`)}
                  </Button>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
