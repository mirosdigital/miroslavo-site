"use client";

import BlogPostBody from "@/components/blog/BlogPostBody";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import SectionLabel from "@/components/ui/SectionLabel";
import { Link } from "@/i18n/navigation";
import { fetchWordPressPostClient } from "@/lib/wordpress-client";
import { formatPostDate } from "@/lib/wordpress";
import Image from "next/image";
import { useEffect, useState } from "react";

type BlogPostLoaderProps = {
  slug: string;
  labels: {
    back: string;
    fallback: string;
    readOnSite: string;
    loading: string;
    notFound: string;
  };
};

export default function BlogPostLoader({ slug, labels }: BlogPostLoaderProps) {
  const [post, setPost] = useState<
    Awaited<ReturnType<typeof fetchWordPressPostClient>> | undefined
  >(undefined);

  useEffect(() => {
    let cancelled = false;

    fetchWordPressPostClient(slug).then((result) => {
      if (!cancelled) {
        setPost(result);
      }
    });

    return () => {
      cancelled = true;
    };
  }, [slug]);

  if (post === undefined) {
    return (
      <main id="main-content">
        <Section wide padTop="tight" className="bg-background pb-24 lg:pb-32">
          <p className="text-sm font-light text-muted">{labels.loading}</p>
        </Section>
      </main>
    );
  }

  if (!post) {
    return (
      <main id="main-content">
        <Section wide padTop="tight" className="bg-background pb-24 lg:pb-32">
          <p className="text-sm font-light text-muted">{labels.notFound}</p>
          <Link
            href="/blog"
            className="mt-6 inline-block text-sm font-light text-muted transition-colors duration-300 hover:text-foreground"
          >
            ← {labels.back}
          </Link>
        </Section>
      </main>
    );
  }

  const hasContent = post.content.rendered.trim().length > 0;

  return (
    <main id="main-content">
      <Section wide padTop="tight" className="bg-background pb-24 lg:pb-32">
        <Reveal>
          <Link
            href="/blog"
            className="text-sm font-light text-muted transition-colors duration-300 hover:text-foreground"
          >
            ← {labels.back}
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
              <p className="text-sm font-light text-muted">{labels.fallback}</p>
              <Button href={post.link} external variant="secondary">
                {labels.readOnSite}
              </Button>
            </div>
          )}
        </Reveal>

        <Reveal delay={0.14} className="mt-16 border-t border-border pt-8">
          <Link
            href="/blog"
            className="text-sm font-light text-muted transition-colors duration-300 hover:text-foreground"
          >
            ← {labels.back}
          </Link>
        </Reveal>
      </Section>
    </main>
  );
}
