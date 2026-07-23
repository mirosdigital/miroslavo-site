import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPostView from "@/components/blog/BlogPostView";
import { createPageMetadata, defaultOgImagePath } from "@/lib/metadata";
import { getWordPressPost, stripHtml } from "@/lib/wordpress";
import { setRequestLocale } from "next-intl/server";

export const revalidate = 3600;

type JournalPostPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateMetadata({
  params,
}: JournalPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getWordPressPost(slug);

  if (!post) {
    return {};
  }

  const description =
    stripHtml(post.excerpt.rendered) ||
    stripHtml(post.content.rendered).slice(0, 160);

  return createPageMetadata({
    title: post.title.rendered,
    description,
    path: `/${slug}`,
    type: "article",
    ogImage: post.featuredImage
      ? {
          url: post.featuredImage.url,
          alt: post.featuredImage.alt,
          width: post.featuredImage.width,
          height: post.featuredImage.height,
        }
      : defaultOgImagePath,
  });
}

export default async function JournalPostPage({ params }: JournalPostPageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const post = await getWordPressPost(slug);

  if (!post) {
    notFound();
  }

  return <BlogPostView post={post} />;
}
