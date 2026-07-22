import type { Metadata } from "next";
import ExhibitionHighlights from "@/components/exhibitions/ExhibitionHighlights";
import BicdAmbassadorVideo from "@/components/exhibitions/BicdAmbassadorVideo";
import ExhibitionTimeline from "@/components/exhibitions/ExhibitionTimeline";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import CtaActions from "@/components/ui/CtaActions";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import SectionLabel from "@/components/ui/SectionLabel";
import { routing } from "@/i18n/routing";
import { homeSectionHref } from "@/lib/i18n/paths";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
import { getTranslations, setRequestLocale } from "next-intl/server";

type ExhibitionsPageProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: ExhibitionsPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "exhibitions.metadata" });

  return createPageMetadata({
    title: t("title"),
    description: t("description"),
    path: "/exhibitions",
    ogImage: {
      url: "/exhibitions/connext-global-symphony.png",
      alt: t("title"),
    },
  });
}

export default async function ExhibitionsPage({ params }: ExhibitionsPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("exhibitions");

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
          className="bg-background pt-16 pb-12 lg:pt-24 lg:pb-16"
        >
          <Reveal>
            <SectionLabel>{t("featured.eyebrow")}</SectionLabel>
            <p className="mt-4 max-w-2xl text-sm font-light leading-relaxed text-muted-light">
              {t("featured.description")}
            </p>
          </Reveal>
          <div className="mt-12 lg:mt-16">
            <ExhibitionHighlights />
          </div>
        </Section>

        <Section
          wide
          padTop="none"
          padBottom="none"
          className="border-t border-border bg-surface py-12 lg:py-16"
        >
          <BicdAmbassadorVideo />
        </Section>

        <Section
          wide
          padTop="none"
          padBottom="tight"
          className="border-t border-border bg-background pt-12 lg:pt-16"
        >
          <Reveal>
            <SectionLabel>{t("timeline.eyebrow")}</SectionLabel>
            <h2 className="mt-4 max-w-2xl text-[clamp(1.75rem,3vw,2.5rem)] font-light leading-[1.12] tracking-[-0.03em] text-foreground">
              {t("timeline.title")}
            </h2>
          </Reveal>
          <div className="mt-10 lg:mt-12">
            <ExhibitionTimeline />
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
                    href: homeSectionHref("contact"),
                    label: t("cta.contact"),
                    variant: "secondary",
                  },
                  {
                    href: "/works",
                    label: t("cta.works"),
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
