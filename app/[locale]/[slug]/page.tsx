import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import BlogPostLoader from "@/components/blog/BlogPostLoader";
import { createPageMetadata, defaultOgImagePath } from "@/lib/metadata";
import { getTranslations, setRequestLocale } from "next-intl/server";

export const revalidate = 3600;

type JournalPostPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateMetadata({
  params,
}: JournalPostPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const t = await getTranslations({ locale, namespace: "blog.metadata" });

  return createPageMetadata({
    title: slug.replace(/-/g, " "),
    description: t("description"),
    path: `/${slug}`,
    ogImage: defaultOgImagePath,
  });
}

export default async function JournalPostPage({ params }: JournalPostPageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("blog");

  return (
    <>
      <Navbar />
      <BlogPostLoader
        slug={slug}
        labels={{
          back: t("back"),
          fallback: t("fallback"),
          readOnSite: t("readOnSite"),
          loading: t("pagination.loading"),
          notFound: t("postNotFound"),
        }}
      />
      <Footer />
    </>
  );
}
