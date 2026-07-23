import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import BlogFeed from "@/components/blog/BlogFeed";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import SectionLabel from "@/components/ui/SectionLabel";
import { routing } from "@/i18n/routing";
import { createPageMetadata, defaultOgImagePath } from "@/lib/metadata";
import { getWordPressPosts } from "@/lib/wordpress";
import { getTranslations, setRequestLocale } from "next-intl/server";

export const revalidate = 3600;
export const dynamic = "force-dynamic";

type BlogPageProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog.metadata" });

  return createPageMetadata({
    title: t("title"),
    description: t("description"),
    path: "/blog",
    ogImage: defaultOgImagePath,
  });
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("blog");

  const { posts, total, totalPages } = await getWordPressPosts(1);

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
          </Reveal>
        </Section>

        <Section wide padTop="none" className="bg-background pb-24 lg:pb-32">
          {posts.length > 0 ? (
            <BlogFeed
              initialPosts={posts}
              total={total}
              totalPages={totalPages}
              labels={{
                loadMore: t("pagination.loadMore"),
                loading: t("pagination.loading"),
                showing: t("pagination.showing"),
              }}
            />
          ) : (
            <p className="text-sm font-light text-muted">{t("empty")}</p>
          )}
        </Section>
      </main>
      <Footer />
    </>
  );
}
