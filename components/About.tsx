import Image from "next/image";
import CtaActions from "@/components/ui/CtaActions";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import SectionLabel from "@/components/ui/SectionLabel";
import { getSectionId, sectionHref } from "@/lib/i18n/paths";
import { getTranslations } from "next-intl/server";

export default async function About() {
  const t = await getTranslations("about");

  return (
    <Section
      id={getSectionId("about")}
      ariaLabelledby="about-heading"
      wide
      className="bg-background"
    >
      <div className="grid gap-20 lg:grid-cols-12 lg:items-center lg:gap-16">
        <Reveal className="lg:col-span-5">
          <SectionLabel>{t("eyebrow")}</SectionLabel>
          <h2
            id="about-heading"
            className="mt-6 text-[clamp(2rem,3.5vw,3rem)] font-light leading-[1.1] tracking-[-0.03em] text-foreground"
          >
            {t("title")}
          </h2>
          <div className="relative mt-10 aspect-[4/5] overflow-hidden bg-surface-muted sm:mt-12">
            <Image
              src="/about/portrait.png"
              alt={t("portraitAlt")}
              fill
              className="object-cover object-[center_25%]"
              sizes="(max-width: 1024px) 100vw, 42vw"
            />
          </div>
          <p className="editorial-label mt-8">{t("location")}</p>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-7">
          <p className="text-xl font-light leading-[1.6] tracking-[-0.02em] text-foreground sm:text-2xl">
            {t("quote")}
          </p>
          <p className="mt-10 max-w-xl text-base font-light leading-[1.75] text-muted">
            {t("description")}
          </p>
          <p className="mt-6 max-w-xl text-base font-light leading-[1.75] text-muted">
            {t("description2")}
          </p>
          <CtaActions
            className="mt-10"
            actions={[
              {
                href: "/exhibitions",
                label: t("exhibitionsCta"),
                variant: "secondary",
              },
              {
                href: sectionHref("contact"),
                label: t("cta"),
              },
            ]}
          />
        </Reveal>
      </div>
    </Section>
  );
}
