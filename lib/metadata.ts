import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const defaultOgImagePath = "/art/dances-with-chaos.jpg";

export function absoluteUrl(path: string): string {
  const base = siteConfig.url.replace(/\/$/, "");
  return path.startsWith("http") ? path : `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

type OgImage = {
  url: string;
  alt?: string;
  width?: number;
  height?: number;
};

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  ogImage?: string | OgImage;
  type?: "website" | "article";
  /** Use for the homepage so the layout title template does not append the site name twice. */
  absoluteTitle?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
};

function resolveOgImage(
  ogImage: string | OgImage,
  fallbackAlt: string,
): OgImage {
  if (typeof ogImage === "string") {
    return { url: absoluteUrl(ogImage), alt: fallbackAlt };
  }

  return {
    ...ogImage,
    url: absoluteUrl(ogImage.url),
    alt: ogImage.alt ?? fallbackAlt,
  };
}

export function createPageMetadata({
  title,
  description,
  path,
  ogImage = defaultOgImagePath,
  type = "website",
  absoluteTitle = false,
  publishedTime,
  modifiedTime,
  authors = [siteConfig.author],
}: PageMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const image = resolveOgImage(ogImage, title);

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: url,
    },
    authors: authors.map((name) => ({ name })),
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type,
      images: [image],
      ...(type === "article" && publishedTime
        ? {
            publishedTime,
            modifiedTime: modifiedTime ?? publishedTime,
            authors,
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image.url],
    },
  };
}
