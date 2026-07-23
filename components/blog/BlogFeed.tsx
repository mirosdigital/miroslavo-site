"use client";

import BlogPostCard from "@/components/blog/BlogPostCard";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { fetchWordPressPostsClient } from "@/lib/wordpress-client";
import type { WordPressPost } from "@/lib/wordpress";
import { useEffect, useState } from "react";

type BlogFeedProps = {
  labels: {
    loadMore: string;
    loading: string;
    showing: string;
    loadingInitial: string;
    empty: string;
  };
};

export default function BlogFeed({ labels }: BlogFeedProps) {
  const [posts, setPosts] = useState<WordPressPost[]>([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const hasMore = page > 0 && page < totalPages;

  useEffect(() => {
    let cancelled = false;

    fetchWordPressPostsClient(1).then((result) => {
      if (cancelled) {
        return;
      }

      setPosts(result.posts);
      setPage(result.posts.length > 0 ? 1 : 0);
      setTotal(result.total);
      setTotalPages(result.totalPages);
      setLoading(false);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  async function loadMore() {
    if (loading || !hasMore) {
      return;
    }

    setLoading(true);

    try {
      const result = await fetchWordPressPostsClient(page + 1);
      setPosts((current) => [...current, ...result.posts]);
      setPage((current) => current + 1);
      setTotal(result.total);
      setTotalPages(result.totalPages);
    } finally {
      setLoading(false);
    }
  }

  if (loading && posts.length === 0) {
    return <p className="text-sm font-light text-muted">{labels.loadingInitial}</p>;
  }

  if (!loading && posts.length === 0) {
    return <p className="text-sm font-light text-muted">{labels.empty}</p>;
  }

  return (
    <>
      <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:gap-x-8 lg:gap-y-12">
        {posts.map((post, index) => (
          <Reveal key={post.id} delay={Math.min(index * 0.04, 0.4)}>
            <BlogPostCard post={post} />
          </Reveal>
        ))}
      </div>

      <div className="mt-14 flex flex-col items-center gap-4 border-t border-border pt-8">
        <p className="editorial-label">
          {labels.showing.replace("{count}", String(posts.length)).replace("{total}", String(total))}
        </p>
        {hasMore ? (
          <Button
            type="button"
            variant="secondary"
            disabled={loading}
            onClick={loadMore}
          >
            {loading ? labels.loading : labels.loadMore}
          </Button>
        ) : null}
      </div>
    </>
  );
}
