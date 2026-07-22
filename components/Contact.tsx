import CtaActions from "@/components/ui/CtaActions";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { getSectionId } from "@/lib/i18n/paths";
import { siteConfig } from "@/lib/site";
import { getTranslations } from "next-intl/server";

export default async function Contact() {
  const t = await getTranslations("contact");

  return (
    <section
      id={getSectionId("contact")}
      aria-labelledby="contact-heading"
      className="scroll-mt-28 border-t border-border bg-surface py-32 lg:py-48"
    >
      <Reveal className="mx-auto max-w-2xl px-6 text-center sm:px-10">
        <SectionLabel>{t("eyebrow")}</SectionLabel>
        <h2
          id="contact-heading"
          className="mt-6 text-[clamp(2rem,4vw,3.25rem)] font-light leading-[1.1] tracking-[-0.03em] text-foreground"
        >
          {t("title")}
        </h2>
        <p className="mx-auto mt-8 max-w-md text-base font-light leading-[1.75] text-muted">
          {t("description")}
        </p>
        <CtaActions
          centered
          className="mt-14"
          actions={[
            {
              href: `mailto:${siteConfig.email}`,
              label: t("cta"),
              variant: "primary",
            },
            {
              href: siteConfig.shopUrl,
              label: t("shopCta"),
              variant: "secondary",
            },
            {
              href: "/design",
              label: t("designCta"),
              variant: "secondary",
            },
            {
              href: siteConfig.mirosDigitalUrl,
              label: t("businessCta"),
              external: true,
            },
          ]}
        />
        <p className="editorial-label mx-auto mt-10 max-w-sm">{t("note")}</p>
      </Reveal>
    </section>
  );
}
