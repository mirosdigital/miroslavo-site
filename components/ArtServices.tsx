import Image from "next/image";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { artServices } from "@/lib/data/art-services";
import { sectionHref } from "@/lib/i18n/paths";
import { inquireHref } from "@/lib/inquire";
import { getTranslations } from "next-intl/server";

export default async function ArtServices() {
  const t = await getTranslations("art.services");

  return (
    <div className="mt-24 border-t border-border pt-16 lg:mt-32 lg:pt-24">
      <Reveal className="max-w-2xl">
        <SectionLabel>{t("eyebrow")}</SectionLabel>
        <p className="mt-6 text-base font-light leading-[1.75] text-muted sm:text-lg">
          {t("description")}
        </p>
      </Reveal>

      <div className="mt-14 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-10 lg:gap-y-20">
        {artServices.map((service, index) => (
          <Reveal key={service.key} delay={index * 0.06} className="h-full">
            <article className="group flex h-full flex-col">
              <div className="relative aspect-[4/5] overflow-hidden bg-surface-muted">
                <Image
                  src={service.image}
                  alt={t(`items.${service.key}.imageAlt`)}
                  fill
                  className={`object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.015] ${service.imagePosition ?? "object-center"}`}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="mt-6 flex flex-1 flex-col border-t border-border pt-6">
                <h3 className="text-lg font-normal tracking-[-0.02em] text-foreground">
                  {t(`items.${service.key}.title`)}
                </h3>
                <p className="mt-3 flex-1 text-sm font-light leading-[1.75] text-muted">
                  {t(`items.${service.key}.description`)}
                </p>
                <div className="mt-6">
                  <Button
                    href={inquireHref(t(`items.${service.key}.inquireSubject`))}
                    variant="link"
                  >
                    {t("inquire")}
                  </Button>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-14 lg:mt-16">
        <Button href={sectionHref("contact")} variant="secondary">
          {t("contactCta")}
        </Button>
      </Reveal>
    </div>
  );
}
