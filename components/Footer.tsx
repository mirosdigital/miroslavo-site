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
    <footer className="border-t border-border bg-background py-10 lg:py-12">
      <Container wide>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
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
                className="transition-colors duration-300 hover:text-foreground"
              >
                Miros Digital
              </a>
            </p>
          </div>

          <nav aria-label="Social links">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {socialLinks.map(({ key, label }) => (
                <li key={key}>
                  <a
                    href={siteConfig.social[key]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-light text-muted-light transition-colors duration-300 hover:text-foreground"
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
