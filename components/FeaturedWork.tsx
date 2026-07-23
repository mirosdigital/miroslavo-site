import Image from "next/image";
import ArtServices from "@/components/ArtServices";
import CtaActions from "@/components/ui/CtaActions";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import SectionLabel from "@/components/ui/SectionLabel";
import { artworks } from "@/lib/data/artworks";
import { getArtAspectRatio } from "@/lib/art-image-dimensions";
import { getSectionId, sectionHref } from "@/lib/i18n/paths";
import { siteConfig } from "@/lib/site";
import { getTranslations } from "next-intl/server";

export default async function FeaturedWork() {
  const t = await getTranslations("art");
  const featured = artworks.find((work) => work.featured) ?? artworks[0];

  return (
    <Section
      id={getSectionId("art")}
      ariaLabelledby="art-heading"
      wide
      className="bg-background"
    >
      <div className="grid gap-16 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-4 lg:pt-4">
          <SectionLabel>{t("eyebrow")}</SectionLabel>
          <h2
            id="art-heading"
            className="mt-6 text-[clamp(2rem,3.5vw,3rem)] font-light leading-[1.1] tracking-[-0.03em] text-foreground"
          >
            {t("title")}
          </h2>
          <p className="mt-8 max-w-sm text-base font-light leading-[1.75] text-muted">
            {t("description")}
          </p>
          <CtaActions
            className="mt-10"
            actions={[
              {
                href: siteConfig.shopUrl,
                label: t("cta.shop"),
                variant: "primary",
              },
              {
                href: sectionHref("contact"),
                label: t("cta.inquire"),
                variant: "secondary",
              },
            ]}
          />
        </Reveal>

        {featured ? (
          <Reveal delay={0.1} className="lg:col-span-8">
            <article className="group">
              <div
                className="relative w-full overflow-hidden bg-surface-muted"
                style={{ aspectRatio: getArtAspectRatio(featured.image) }}
              >
                <Image
                  src={featured.image}
                  alt={featured.imageAlt}
                  fill
                  className="object-contain transition-transform duration-[1.4s] ease-out group-hover:scale-[1.01]"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  priority
                />
              </div>
              <div className="mt-6 flex items-baseline justify-between gap-6 border-t border-border pt-6">
                <div>
                  <p className="editorial-label">{t(`categories.${featured.category}`)}</p>
                  <h3 className="mt-2 text-xl font-normal tracking-[-0.02em] text-foreground">
                    {featured.title}
                  </h3>
                </div>
              </div>
            </article>
          </Reveal>
        ) : null}
      </div>

      <ArtServices />

      <Reveal className="mt-24 border-t border-border pt-12 lg:mt-32">
        <CtaActions
          centered
          actions={[
            {
              href: siteConfig.shopUrl,
              label: t("cta.shop"),
              variant: "primary",
            },
            {
              href: sectionHref("contact"),
              label: t("cta.inquire"),
              variant: "secondary",
            },
            {
              href: "/design",
              label: t("cta.design"),
            },
          ]}
        />
      </Reveal>
    </Section>
  );
}
