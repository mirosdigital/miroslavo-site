import type { Redirect } from "next/dist/lib/load-custom-routes";

const miros = "https://miros.digital";

function permanent(source: string, destination: string): Redirect {
  return { source, destination, permanent: true };
}

/** 301s for old WordPress URLs after migrating to the Next.js site. */
export const legacyRedirects: Redirect[] = [
  // —— Shop (EN) ——
  permanent("/shop", "/works"),
  permanent("/product/:path*", "/works"),
  permanent("/product-category/:path*", "/works"),
  permanent("/cart", "/works"),
  permanent("/checkout", "/works"),
  permanent("/my-account/:path*", "/works"),

  // —— Blog (EN) ——
  permanent("/blog/:slug", "/:slug"),

  // —— EN creative → sections ——
  permanent("/gallery", "/works"),
  permanent("/art", "/works"),
  permanent("/atelier", "/works"),
  permanent("/contact", "/#contact"),
  permanent("/biography", "/#about"),
  permanent("/press-room", "/"),

  // —— EN commercial → miros.digital ——
  permanent("/marketing/:path*", miros),
  permanent("/consulting/:path*", miros),
  permanent("/seo-services/:path*", miros),
  permanent("/google-ads-management/:path*", miros),
  permanent("/google-analytics-4/:path*", miros),
  permanent("/paid-advertising/:path*", miros),
  permanent("/copywriting/:path*", miros),
  permanent("/brand-naming/:path*", miros),
  permanent("/modern-web-design/:path*", miros),
  permanent("/monthly-web-marketing-support/:path*", miros),
  permanent("/event-marketing/:path*", miros),
  permanent("/industrial-design-services/:path*", miros),
  permanent("/graphic-design-services/:path*", miros),
  permanent("/digital-art-services/:path*", miros),
  permanent("/custom-art-services/:path*", miros),
  permanent("/product-engineering/:path*", miros),
  permanent("/3d-factory/:path*", miros),
  permanent("/licensing/:path*", miros),
  permanent("/glossary/:path*", miros),
  permanent("/partners/:path*", miros),
  permanent("/services/:path*", miros),
  permanent("/workshops/:path*", miros),
  permanent("/interactive-workshops/:path*", miros),
  permanent("/live-painting-performance/:path*", miros),
  permanent("/subscription/:path*", miros),
  permanent("/patron/:path*", miros),
  permanent("/projects", "/design"),

  // —— Czech: creative → miroslavo.com ——
  permanent("/cs", "/"),
  permanent("/cs/design/:path*", "/design"),
  permanent("/cs/exhibitions/:path*", "/exhibitions"),
  permanent("/cs/galerie/:path*", "/works"),
  permanent("/cs/umeni/:path*", "/works"),
  permanent("/cs/prace/:path*", "/works"),
  permanent("/cs/shop/:path*", "/works"),
  permanent("/cs/zivotopis/:path*", "/#about"),
  permanent("/cs/kontakt/:path*", "/#contact"),
  permanent("/cs/press-room/:path*", "/"),
  permanent("/cs/blog/:path*", "/blog"),
  permanent("/cs/cart/:path*", "/works"),
  permanent("/cs/my-account/:path*", "/works"),

  // —— Czech: commercial → miros.digital ——
  permanent("/cs/marketing/:path*", miros),
  permanent("/cs/glosar/:path*", miros),
  permanent("/cs/partneri/:path*", miros),

  // —— Czech: blog posts & anything else → journal ——
  permanent("/cs/:slug", "/blog"),

  // —— Spanish: creative → miroslavo.com ——
  permanent("/es", "/"),
  permanent("/es/diseno/:path*", "/design"),
  permanent("/es/exposiciones/:path*", "/exhibitions"),
  permanent("/es/galeria/:path*", "/works"),
  permanent("/es/arte/:path*", "/works"),
  permanent("/es/proyectos/:path*", "/design"),
  permanent("/es/shop/:path*", "/works"),
  permanent("/es/biography/:path*", "/#about"),
  permanent("/es/trayectoria/:path*", "/#about"),
  permanent("/es/contact/:path*", "/#contact"),
  permanent("/es/press-room/:path*", "/"),
  permanent("/es/carrito/:path*", "/works"),
  permanent("/es/mi-cuenta/:path*", "/works"),

  // —— Spanish: commercial → miros.digital ——
  permanent("/es/marketing/:path*", miros),
  permanent("/es/glosario/:path*", miros),

  // —— Spanish: blog posts & anything else → journal ——
  permanent("/es/:slug", "/blog"),
];
