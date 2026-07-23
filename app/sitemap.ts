import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
import { getAllWordPressPostsForSitemap } from "@/lib/wordpress";

export const revalidate = 3600;

const staticPages: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}> = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/works", changeFrequency: "weekly", priority: 0.9 },
  { path: "/design", changeFrequency: "monthly", priority: 0.9 },
  { path: "/exhibitions", changeFrequency: "monthly", priority: 0.8 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.8 },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let posts: Array<{ slug: string; lastModified: string }> = [];

  try {
    posts = await getAllWordPressPostsForSitemap();
  } catch {
    // Build should succeed even if WordPress blocks datacenter IPs temporarily.
  }

  return [
    ...staticPages.map(({ path, changeFrequency, priority }) => ({
      url: absoluteUrl(path),
      lastModified: new Date(),
      changeFrequency,
      priority,
    })),
    ...posts.map((post) => ({
      url: absoluteUrl(`/${post.slug}`),
      lastModified: new Date(post.lastModified),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
