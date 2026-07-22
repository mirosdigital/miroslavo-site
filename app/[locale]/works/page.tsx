import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import CtaActions from "@/components/ui/CtaActions";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import SectionLabel from "@/components/ui/SectionLabel";
import WorksCatalogGrid from "@/components/works/WorksCatalogGrid";
import { routing } from "@/i18n/routing";
import { homeSectionHref } from "@/lib/i18n/paths";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
import { getTranslations, setRequestLocale } from "next-intl/server";

type WorksPageProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: WorksPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "works.metadata" });

  return createPageMetadata({
    title: t("title"),
    description: t("description"),
    path: "/works",
    ogImage: { url: "/art/dances-with-chaos.jpg", alt: t("title") },
  });
}

export default async function WorksPage({ params }: WorksPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("works");

  return (
    <>
      <Navbar />
      <main id="main-content">
        <Section wide padTop="tight" className="bg-background">
          <Reveal>
            <SectionLabel>{t("eyebrow")}</SectionLabel>
            <h1 className="mt-6 max-w-3xl text-[clamp(2.5rem,5vw,4rem)] font-light leading-[1.08] tracking-[-0.03em] text-foreground">
              {t("title")}
            </h1>
            <p className="mt-8 max-w-2xl text-base font-light leading-[1.75] text-muted sm:text-lg">
              {t("description")}
            </p>
            <p className="mt-4 max-w-2xl text-sm font-light leading-relaxed text-muted-light">
              {t("note")}
            </p>
          </Reveal>
        </Section>

        <Section wide padTop="none" className="bg-background pb-24 lg:pb-32">
          <WorksCatalogGrid />
        </Section>

        <section className="border-t border-border bg-surface py-24 lg:py-32">
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
                    href: homeSectionHref("contact"),
                    label: t("cta.contact"),
                    variant: "secondary",
                  },
                  {
                    href: "/design",
                    label: t("cta.design"),
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
