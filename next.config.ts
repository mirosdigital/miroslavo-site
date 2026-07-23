import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import { legacyRedirects } from "./lib/legacy-redirects";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  async headers() {
    return [
      {
        // Prevent Hostinger CDN from caching stale HTML for a year after deploys.
        source:
          "/((?!_next/static|_next/image|.*\\.(?:png|jpg|jpeg|gif|webp|svg|ico|woff2)$).*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=0, must-revalidate, s-maxage=0",
          },
        ],
      },
    ];
  },
  async redirects() {
    return legacyRedirects;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.miroslavo.com",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "miroslavo.com",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "cms.miroslavo.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
