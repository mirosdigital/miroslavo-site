"use client";

import BlogPostCard from "@/components/blog/BlogPostCard";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import type { WordPressPost } from "@/lib/wordpress";
import { useState } from "react";

type BlogFeedProps = {
  initialPosts: WordPressPost[];
  total: number;
  totalPages: number;
  labels: {
    loadMore: string;
    loading: string;
    showing: string;
  };
};

export default function BlogFeed({
  initialPosts,
  total,
  totalPages,
  labels,
}: BlogFeedProps) {
  const [posts, setPosts] = useState(initialPosts);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const hasMore = page < totalPages;

  async function loadMore() {
    if (loading || !hasMore) {
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`/api/blog/posts?page=${page + 1}`);

      if (!response.ok) {
        throw new Error("Failed to load posts");
      }

      const data = (await response.json()) as {
        posts: WordPressPost[];
      };

      setPosts((current) => [...current, ...data.posts]);
      setPage((current) => current + 1);
    } finally {
      setLoading(false);
    }
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
