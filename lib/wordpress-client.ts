import {
  BLOG_POSTS_PER_PAGE,
  decodeHtmlEntities,
  type WordPressPost,
  type WordPressPostsResult,
} from "@/lib/wordpress";

const DEFAULT_ORIGIN = "https://cms.miroslavo.com";

type WpPostRaw = {
  id: number;
  slug: string;
  date: string;
  link: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url?: string;
      alt_text?: string;
      media_details?: { width?: number; height?: number };
    }>;
  };
};

export function getPublicWordPressOrigin(): string {
  const raw = process.env.NEXT_PUBLIC_WORDPRESS_API_URL?.trim();
  const origin = raw || DEFAULT_ORIGIN;

  return origin.replace(/\/wp-json\/?.*$/i, "").replace(/\/$/, "");
}

function wpApiUrl(path: string): string {
  return `${getPublicWordPressOrigin()}/wp-json/wp/v2${path}`;
}

function mapRawPost(raw: WpPostRaw): WordPressPost {
  const title = decodeHtmlEntities(raw.title.rendered);
  const media = raw._embedded?.["wp:featuredmedia"]?.[0];

  return {
    id: raw.id,
    slug: raw.slug,
    date: raw.date,
    link: raw.link,
    title: { rendered: title },
    excerpt: { rendered: raw.excerpt.rendered },
    content: { rendered: raw.content.rendered },
    featuredImage: media?.source_url
      ? {
          url: media.source_url,
          alt: media.alt_text || title,
          width: media.media_details?.width,
          height: media.media_details?.height,
        }
      : undefined,
  };
}

async function fetchPostsPath(path: string): Promise<Response> {
  return fetch(wpApiUrl(path), {
    headers: { Accept: "application/json" },
  });
}

export async function fetchWordPressPostsClient(
  page = 1,
  perPage = BLOG_POSTS_PER_PAGE,
): Promise<WordPressPostsResult> {
  const base = `/posts?per_page=${perPage}&page=${page}&orderby=date&order=desc`;
  const paths = [`${base}&_embed=wp:featuredmedia`, base];

  for (const path of paths) {
    const response = await fetchPostsPath(path);

    if (!response.ok) {
      continue;
    }

    const raw = (await response.json()) as WpPostRaw[];

    return {
      posts: raw.map(mapRawPost),
      total: Number(response.headers.get("X-WP-Total") ?? raw.length),
      totalPages: Number(response.headers.get("X-WP-TotalPages") ?? 1),
    };
  }

  return { posts: [], total: 0, totalPages: 0 };
}

export async function fetchWordPressPostClient(
  slug: string,
): Promise<WordPressPost | null> {
  const encoded = encodeURIComponent(slug);
  const paths = [
    `/posts?slug=${encoded}&_embed=wp:featuredmedia`,
    `/posts?slug=${encoded}`,
  ];

  for (const path of paths) {
    const response = await fetchPostsPath(path);

    if (!response.ok) {
      continue;
    }

    const raw = (await response.json()) as WpPostRaw[];
    return raw[0] ? mapRawPost(raw[0]) : null;
  }

  return null;
}
