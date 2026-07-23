import Container from "@/components/ui/Container";
import { siteConfig } from "@/lib/site";
import { getTranslations } from "next-intl/server";

const socialLinks = [
  { key: "instagram", label: "Instagram" },
  { key: "facebook", label: "Facebook" },
  { key: "linkedin", label: "LinkedIn" },
  { key: "youtube", label: "YouTube" },
] as const;

export default async function Footer() {
  const t = await getTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface py-12 lg:py-14">
      <Container wide>
        <div className="flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-2">
            <p className="text-xs font-light text-muted-light">
              © {year} {siteConfig.author}. {t("rights")}
            </p>
            <p className="text-xs font-light text-muted-light">
              {t("siteBy")}{" "}
              <a
                href={siteConfig.mirosDigitalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted transition-colors duration-300 hover:text-foreground"
              >
                Miros Digital
              </a>
            </p>
          </div>

          <nav aria-label="Social links" className="sm:text-right">
            <p className="editorial-label text-muted">{t("follow")}</p>
            <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2 sm:justify-end">
              {socialLinks.map(({ key, label }) => (
                <li key={key}>
                  <a
                    href={siteConfig.social[key]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-foreground/80 underline-offset-4 transition-colors duration-300 hover:text-foreground hover:underline"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
