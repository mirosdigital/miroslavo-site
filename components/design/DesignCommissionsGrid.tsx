import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import DesignGridImage from "@/components/design/design-grid-image";
import { designCommissions } from "@/lib/data/designs";
import { inquireHref } from "@/lib/inquire";
import { getTranslations } from "next-intl/server";

export default async function DesignCommissionsGrid() {
  const t = await getTranslations("design");

  return (
    <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:gap-x-8 lg:gap-y-12">
      {designCommissions.map((item, index) => (
        <Reveal key={item.id} delay={index * 0.06}>
          <article className="group flex h-full flex-col">
            <div className="relative overflow-hidden bg-surface-muted aspect-[4/3]">
              <DesignGridImage
                src={item.image}
                alt={item.imageAlt}
                imageClassName={item.imageClassName}
              />
            </div>
            <div className="mt-5 flex flex-1 flex-col border-t border-border pt-5">
              <p className="editorial-label">
                {t(`categories.${item.category}`)} · {item.date}
              </p>
              <h2 className="mt-2 text-xl font-normal tracking-[-0.02em] text-foreground">
                {item.title}
              </h2>
              <p className="mt-1 text-sm font-light text-muted">{item.client}</p>
              <p className="mt-2 flex-1 max-w-md text-sm font-light leading-relaxed text-muted">
                {item.description}
              </p>
              <div className="pt-5">
                <Button href={inquireHref(item.title)} variant="secondary">
                  {t("commissions.inquire")}
                </Button>
              </div>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
