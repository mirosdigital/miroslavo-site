import { siteConfig } from "@/lib/site";

export function inquireHref(workTitle: string): string {
  const subject = encodeURIComponent(`Inquiry: ${workTitle}`);
  return `mailto:${siteConfig.email}?subject=${subject}`;
}

export function formatPrice(amount: number, currency = "EUR"): string {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}
