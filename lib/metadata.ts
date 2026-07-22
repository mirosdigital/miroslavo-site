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
}: PageMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const image = resolveOgImage(ogImage, title);

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image.url],
    },
  };
}
