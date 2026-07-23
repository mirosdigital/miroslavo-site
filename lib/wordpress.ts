import { siteConfig } from "@/lib/site";

export function getWordPressOrigin(): string {
  const raw = process.env.WORDPRESS_API_URL?.trim();
  if (!raw) {
    return siteConfig.url;
  }

  return raw.replace(/\/wp-json\/?.*$/i, "").replace(/\/$/, "");
}

function getWordPressApiBase(): string {
  return `${getWordPressOrigin()}/wp-json/wp/v2`;
}

const WP_API = getWordPressApiBase();

const WP_FETCH_HEADERS = {
  Accept: "application/json",
  "User-Agent": "MiroslavoSite/1.0 (+https://www.miroslavo.com)",
};

function isProductionBuild(): boolean {
  return (
    process.env.NEXT_PHASE === "phase-production-build" ||
    process.env.NEXT_PHASE === "phase-export"
  );
}

export type WordPressPost = {
  id: number;
  slug: string;
  date: string;
  link: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  featuredImage?: {
    url: string;
    alt: string;
    width?: number;
    height?: number;
  };
};

type WpPostRaw = {
  id: number;
  slug: string;
  date: string;
  link: string;
  featured_media: number;
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

type FeaturedImage = NonNullable<WordPressPost["featuredImage"]>;

function featuredImageFromEmbed(
  raw: WpPostRaw,
  title: string,
): FeaturedImage | undefined {
  const media = raw._embedded?.["wp:featuredmedia"]?.[0];

  if (!media?.source_url) {
    return undefined;
  }

  return {
    url: media.source_url,
    alt: media.alt_text || title,
    width: media.media_details?.width,
    height: media.media_details?.height,
  };
}

function extractFeaturedImageFromHtml(html: string): string | undefined {
  const patterns = [
    /"primaryImageOfPage":\{"@id":"(https:\\\/\\\/[^"]+\/wp-content\/uploads\/[^"]+)"/,
    /"primaryImageOfPage":\{"@id":"(https:\/\/[^"]+\/wp-content\/uploads\/[^"]+)"/,
    /property="og:image"\s+content="(https:\/\/[^"]+\/wp-content\/uploads\/[^"]+)"/,
    /"image":\{"@id":"(https:\/\/[^"]+\/wp-content\/uploads\/[^"]+\.(?:png|jpe?g|webp))"/i,
  ];

  for (const pattern of patterns) {
    const match = html.match(pattern);
    if (match?.[1]) {
      return decodeHtmlEntities(match[1].replace(/\\\//g, "/"));
    }
  }

  const uploads = [
    ...html.matchAll(
      /https:\/\/(?:www\.)?miroslavo\.com\/wp-content\/uploads\/[^"'\\]+?\.(?:png|jpe?g|webp)/gi,
    ),
  ].map(([url]) => decodeHtmlEntities(url.replace(/&amp;/g, "&")));

  const fullSize = uploads.find(
    (url) =>
      !/-\d+x\d+\.(?:png|jpe?g|webp)$/i.test(url) &&
      !url.includes("cropped-") &&
      !url.includes("@"),
  );

  return fullSize ?? uploads[0];
}

async function featuredImageFromPage(
  link: string,
  title: string,
): Promise<FeaturedImage | undefined> {
  try {
    const response = await fetch(link, {
      next: { revalidate: BLOG_REVALIDATE_SECONDS },
    });

    if (!response.ok) {
      return undefined;
    }

    const url = extractFeaturedImageFromHtml(await response.text());

    if (!url) {
      return undefined;
    }

    return { url, alt: title };
  } catch {
    return undefined;
  }
}

async function resolveFeaturedImage(
  raw: WpPostRaw,
  title: string,
): Promise<FeaturedImage | undefined> {
  const embedded = featuredImageFromEmbed(raw, title);
  if (embedded) {
    return embedded;
  }

  // Skip HTML scraping during production builds — WordPress security plugins
  // often block datacenter IPs when many page fetches run in parallel.
  if (isProductionBuild()) {
    return undefined;
  }

  if (raw.featured_media > 0 || raw.content.rendered.trim().length === 0) {
    return featuredImageFromPage(raw.link, title);
  }

  return undefined;
}

async function mapPost(raw: WpPostRaw): Promise<WordPressPost> {
  const title = decodeHtmlEntities(raw.title.rendered);

  return {
    id: raw.id,
    slug: raw.slug,
    date: raw.date,
    link: raw.link,
    title: { rendered: title },
    excerpt: { rendered: raw.excerpt.rendered },
    content: { rendered: raw.content.rendered },
    featuredImage: await resolveFeaturedImage(raw, title),
  };
}

export type WordPressPostsResult = {
  posts: WordPressPost[];
  total: number;
  totalPages: number;
};

export const BLOG_POSTS_PER_PAGE = 24;
export const BLOG_REVALIDATE_SECONDS = 3600;

export function decodeHtmlEntities(text: string): string {
  return text
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) =>
      String.fromCharCode(parseInt(hex, 16)),
    )
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ");
}

export function stripHtml(html: string): string {
  return decodeHtmlEntities(html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim());
}

async function fetchWp(path: string, init?: RequestInit): Promise<Response> {
  const response = await fetch(`${WP_API}${path}`, {
    ...init,
    headers: {
      ...WP_FETCH_HEADERS,
      ...init?.headers,
    },
    next: { revalidate: BLOG_REVALIDATE_SECONDS },
  });

  if (!response.ok) {
    throw new Error(`WordPress API error: ${response.status} ${path}`);
  }

  return response;
}

export async function getWordPressPosts(
  page = 1,
  perPage = BLOG_POSTS_PER_PAGE,
): Promise<WordPressPostsResult> {
  try {
    const response = await fetchWp(
      `/posts?per_page=${perPage}&page=${page}&_embed=wp:featuredmedia&orderby=date&order=desc`,
    );

    const raw = (await response.json()) as WpPostRaw[];

    return {
      posts: await Promise.all(raw.map(mapPost)),
      total: Number(response.headers.get("X-WP-Total") ?? raw.length),
      totalPages: Number(response.headers.get("X-WP-TotalPages") ?? 1),
    };
  } catch (error) {
    if (isProductionBuild()) {
      return { posts: [], total: 0, totalPages: 0 };
    }

    throw error;
  }
}

export async function getWordPressPost(
  slug: string,
): Promise<WordPressPost | null> {
  const response = await fetch(
    `${WP_API}/posts?slug=${encodeURIComponent(slug)}&_embed=wp:featuredmedia`,
    {
      headers: WP_FETCH_HEADERS,
      next: { revalidate: BLOG_REVALIDATE_SECONDS },
    },
  );

  if (!response.ok) {
    return null;
  }

  const raw = (await response.json()) as WpPostRaw[];
  return raw[0] ? await mapPost(raw[0]) : null;
}

export async function getAllWordPressPostsForSitemap(): Promise<
  Array<{ slug: string; lastModified: string }>
> {
  const posts: Array<{ slug: string; lastModified: string }> = [];
  let page = 1;
  let totalPages = 1;

  while (page <= totalPages) {
    const response = await fetch(
      `${WP_API}/posts?per_page=100&page=${page}&_fields=slug,modified&orderby=date&order=desc`,
      {
        headers: WP_FETCH_HEADERS,
        next: { revalidate: BLOG_REVALIDATE_SECONDS },
      },
    );

    if (!response.ok) {
      break;
    }

    totalPages = Number(response.headers.get("X-WP-TotalPages") ?? 1);
    const raw = (await response.json()) as Array<{ slug: string; modified: string }>;
    posts.push(
      ...raw.map((post) => ({
        slug: post.slug,
        lastModified: post.modified,
      })),
    );
    page += 1;
  }

  return posts;
}

export function formatPostDate(date: string, locale = "en"): string {
  return new Intl.DateTimeFormat(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}
