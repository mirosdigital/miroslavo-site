import Image from "next/image";
import CtaActions from "@/components/ui/CtaActions";
import SectionLabel from "@/components/ui/SectionLabel";
import { sectionHref } from "@/lib/i18n/paths";
import { siteConfig } from "@/lib/site";
import { getTranslations } from "next-intl/server";

export default async function Hero() {
  const t = await getTranslations("hero");

  return (
    <section
      className="relative min-h-[100svh] bg-background"
      aria-label="Introduction"
    >
      <div className="mx-auto grid min-h-[100svh] max-w-[120rem] lg:grid-cols-12">
        <div className="flex flex-col justify-center px-6 pb-16 pt-24 sm:px-10 lg:col-span-4 lg:px-16 lg:py-28 xl:py-32">
          <SectionLabel>{t("eyebrow")}</SectionLabel>
          <h1 className="mt-8 text-[clamp(2.75rem,5.5vw,4.25rem)] font-light leading-[1.08] tracking-[-0.03em] text-foreground">
            {t("title")}
          </h1>
          <p className="mt-8 max-w-sm text-base font-light leading-[1.75] text-muted">
            {t("description")}
          </p>
          <CtaActions
            className="mt-12"
            actions={[
              {
                href: siteConfig.shopUrl,
                label: t("ctaPrimary"),
                variant: "primary",
              },
              {
                href: sectionHref("contact"),
                label: t("ctaSecondary"),
                variant: "secondary",
              },
            ]}
          />
        </div>

        <div className="relative min-h-[60vh] lg:col-span-8 lg:min-h-[100svh]">
          <Image
            src="/art/dances-with-chaos.jpg"
            alt="Dances with Chaos — abstract painting by Miroslavo"
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 66vw"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent px-6 py-8 lg:hidden">
            <p className="editorial-label text-foreground/70">{t("featuredWork")}</p>
          </div>
          <p className="editorial-label absolute bottom-10 right-10 hidden text-background/80 mix-blend-difference lg:block">
            {t("featuredWork")}
          </p>
        </div>
      </div>
    </section>
  );
}
