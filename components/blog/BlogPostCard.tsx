import Image from "next/image";
import { Link } from "@/i18n/navigation";
import {
  formatPostDate,
  stripHtml,
  type WordPressPost,
} from "@/lib/wordpress";

type BlogPostCardProps = {
  post: WordPressPost;
};

export default function BlogPostCard({ post }: BlogPostCardProps) {
  const excerpt =
    stripHtml(post.excerpt.rendered) ||
    stripHtml(post.content.rendered).slice(0, 180);

  return (
    <article className="group flex h-full flex-col">
      <Link
        href={`/${post.slug}`}
        className="relative block overflow-hidden bg-surface-muted aspect-[4/3]"
      >
        {post.featuredImage ? (
          <Image
            src={post.featuredImage.url}
            alt={post.featuredImage.alt}
            fill
            className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.015]"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
        ) : (
          <div className="flex h-full items-end bg-surface-muted p-6">
            <p className="text-sm font-light leading-relaxed text-muted">
              {post.title.rendered}
            </p>
          </div>
        )}
      </Link>
      <div className="mt-5 flex flex-1 flex-col border-t border-border pt-5">
        <p className="editorial-label">{formatPostDate(post.date)}</p>
        <h2 className="mt-2 text-xl font-normal tracking-[-0.02em] text-foreground">
          <Link
            href={`/${post.slug}`}
            className="transition-opacity duration-300 hover:opacity-70"
          >
            {post.title.rendered}
          </Link>
        </h2>
        {excerpt ? (
          <p className="mt-2 flex-1 text-sm font-light leading-relaxed text-muted">
            {excerpt}
          </p>
        ) : null}
      </div>
    </article>
  );
}
