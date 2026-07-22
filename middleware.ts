import createIntlMiddleware from "next-intl/middleware";
import { routing } from "@/i18n/routing";

export default createIntlMiddleware(routing);

export const config = {
  // Exclude static files (e.g. /design/*.jpg) — /design/:path* was rewriting assets as pages.
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
