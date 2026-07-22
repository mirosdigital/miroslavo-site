import type { Metadata } from "next";
import DesignCommissionsGrid from "@/components/design/DesignCommissionsGrid";
import DesignProjectGrid from "@/components/design/DesignProjectGrid";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import CtaActions from "@/components/ui/CtaActions";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import SectionLabel from "@/components/ui/SectionLabel";
import { routing } from "@/i18n/routing";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
import { getTranslations, setRequestLocale } from "next-intl/server";

type DesignPageProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: DesignPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "design.metadata" });

  return createPageMetadata({
    title: t("title"),
    description: t("description"),
    path: "/design",
    ogImage: { url: "/design/mall-pay.jpg", alt: t("title") },
  });
}

export default async function DesignPage({ params }: DesignPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("design");

  return (
    <>
      <Navbar />
      <main id="main-content">
        <Section wide padTop="tight" padBottom="none" className="bg-background">
          <Reveal>
            <SectionLabel>{t("eyebrow")}</SectionLabel>
            <h1 className="mt-6 max-w-3xl text-[clamp(2.5rem,5vw,4rem)] font-light leading-[1.08] tracking-[-0.03em] text-foreground">
              {t("title")}
            </h1>
            <p className="mt-8 max-w-2xl text-base font-light leading-[1.75] text-muted sm:text-lg">
              {t("description")}
            </p>
          </Reveal>
        </Section>

        <Section
          wide
          padTop="none"
          padBottom="none"
          className="bg-background pt-12 pb-10 lg:pt-16 lg:pb-12"
        >
          <Reveal>
            <SectionLabel>{t("featured.eyebrow")}</SectionLabel>
            <p className="mt-3 max-w-2xl text-sm font-light leading-relaxed text-muted-light">
              {t("featured.description")}
            </p>
          </Reveal>
          <div className="mt-8 lg:mt-10">
            <DesignProjectGrid />
          </div>
        </Section>

        <Section
          wide
          padTop="none"
          padBottom="none"
          className="border-t border-border bg-surface py-10 lg:py-12"
        >
          <Reveal>
            <SectionLabel>{t("commissions.eyebrow")}</SectionLabel>
            <h2 className="mt-3 max-w-2xl text-[clamp(1.75rem,3vw,2.25rem)] font-light leading-[1.12] tracking-[-0.03em] text-foreground">
              {t("commissions.title")}
            </h2>
            <p className="mt-3 max-w-2xl text-sm font-light leading-relaxed text-muted-light">
              {t("commissions.description")}
            </p>
          </Reveal>
          <div className="mt-8 lg:mt-10">
            <DesignCommissionsGrid />
          </div>
        </Section>

        <section className="border-t border-border bg-background py-24 lg:py-32">
          <Reveal className="mx-auto max-w-2xl px-6 text-center sm:px-10">
            <SectionLabel>{t("cta.eyebrow")}</SectionLabel>
            <p className="mt-6 text-xl font-light leading-relaxed tracking-[-0.02em] text-foreground">
              {t("cta.text")}
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-10">
              <CtaActions
                centered
                actions={[
                  {
                    href: `mailto:${siteConfig.email}`,
                    label: t("cta.email"),
                    variant: "primary",
                  },
                  {
                    href: siteConfig.shopUrl,
                    label: t("cta.art"),
                    variant: "secondary",
                  },
                  {
                    href: siteConfig.mirosDigitalUrl,
                    label: t("cta.business"),
                    external: true,
                  },
                ]}
              />
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
