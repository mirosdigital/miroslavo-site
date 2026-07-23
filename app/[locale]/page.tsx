import type { Metadata } from "next";
import About from "@/components/About";
import ClientLocations from "@/components/ClientLocations";
import Contact from "@/components/Contact";
import FeaturedWork from "@/components/FeaturedWork";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Practice from "@/components/Practice";
import PressProof from "@/components/PressProof";
import { routing } from "@/i18n/routing";
import { createPageMetadata } from "@/lib/metadata";
import { getTranslations, setRequestLocale } from "next-intl/server";

type HomePageProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: HomePageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return createPageMetadata({
    title: t("title"),
    description: t("description"),
    path: "/",
    absoluteTitle: true,
    ogImage: { url: "/art/dances-with-chaos.jpg", alt: t("ogAlt") },
  });
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Practice />
        <FeaturedWork />
        <PressProof />
        <ClientLocations />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
