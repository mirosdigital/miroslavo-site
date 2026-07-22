import Image from "next/image";
import BlogPostBody from "@/components/blog/BlogPostBody";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import SectionLabel from "@/components/ui/SectionLabel";
import { Link } from "@/i18n/navigation";
import { formatPostDate, type WordPressPost } from "@/lib/wordpress";
import { getTranslations } from "next-intl/server";

type BlogPostViewProps = {
  post: WordPressPost;
};

export default async function BlogPostView({ post }: BlogPostViewProps) {
  const t = await getTranslations("blog");
  const hasContent = post.content.rendered.trim().length > 0;

  return (
    <>
      <Navbar />
      <main id="main-content">
        <Section wide padTop="tight" className="bg-background pb-24 lg:pb-32">
          <Reveal>
            <Link
              href="/blog"
              className="text-sm font-light text-muted transition-colors duration-300 hover:text-foreground"
            >
              ← {t("back")}
            </Link>
            <SectionLabel className="mt-8">{formatPostDate(post.date)}</SectionLabel>
            <h1 className="mt-6 max-w-3xl text-[clamp(2rem,4vw,3rem)] font-light leading-[1.12] tracking-[-0.03em] text-foreground">
              {post.title.rendered}
            </h1>
          </Reveal>

          {post.featuredImage ? (
            <Reveal delay={0.06} className="mt-10">
              <div className="relative aspect-[16/10] overflow-hidden bg-surface-muted">
                <Image
                  src={post.featuredImage.url}
                  alt={post.featuredImage.alt}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1280px) 100vw, 1200px"
                />
              </div>
            </Reveal>
          ) : null}

          <Reveal delay={0.1}>
            {hasContent ? (
              <BlogPostBody html={post.content.rendered} />
            ) : (
              <div className="mt-10 space-y-6">
                {post.excerpt.rendered ? (
                  <BlogPostBody html={post.excerpt.rendered} />
                ) : null}
                <p className="text-sm font-light text-muted">{t("fallback")}</p>
                <Button href={post.link} external variant="secondary">
                  {t("readOnSite")}
                </Button>
              </div>
            )}
          </Reveal>

          <Reveal delay={0.14} className="mt-16 border-t border-border pt-8">
            <Link
              href="/blog"
              className="text-sm font-light text-muted transition-colors duration-300 hover:text-foreground"
            >
              ← {t("back")}
            </Link>
          </Reveal>
        </Section>
      </main>
      <Footer />
    </>
  );
}
