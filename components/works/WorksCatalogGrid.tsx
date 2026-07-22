import Image from "next/image";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { availableWorks } from "@/lib/data/available-works";
import { formatPrice, inquireHref } from "@/lib/inquire";
import { getTranslations } from "next-intl/server";

export default async function WorksCatalogGrid() {
  const t = await getTranslations("works");

  return (
    <div className="grid gap-x-8 gap-y-20 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-28">
      {availableWorks.map((work, index) => {
        const isSold = work.status === "sold";

        return (
        <Reveal key={work.id} delay={index * 0.06}>
          <article className="group flex h-full flex-col">
            <div className="relative aspect-[4/5] overflow-hidden bg-surface-muted">
              <Image
                src={work.image}
                alt={work.imageAlt}
                fill
                className={`object-cover transition-transform duration-[1.4s] ease-out ${
                  isSold
                    ? "scale-[1.01] opacity-75 saturate-[0.85]"
                    : "group-hover:scale-[1.015]"
                }`}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {isSold ? (
                <span className="editorial-label absolute left-4 top-4 border border-border bg-background/90 px-3 py-1.5 backdrop-blur-sm">
                  {t("sold")}
                </span>
              ) : null}
            </div>
            <div className="mt-6 flex flex-1 flex-col border-t border-border pt-6">
              <p className="editorial-label">{t(`categories.${work.category}`)}</p>
              <h2 className="mt-2 text-xl font-normal tracking-[-0.02em] text-foreground">
                {work.title}
              </h2>
              {work.medium || work.size ? (
                <p className="mt-2 text-sm font-light text-muted">
                  {[work.medium, work.size].filter(Boolean).join(" · ")}
                </p>
              ) : null}
              <div className="mt-auto flex items-end justify-between gap-4 pt-6">
                {isSold ? (
                  <p className="text-lg font-light tracking-[-0.02em] text-muted-light">
                    {t("sold")}
                  </p>
                ) : (
                  <>
                    <p className="text-lg font-light tracking-[-0.02em] text-foreground">
                      {formatPrice(work.price, work.currency)}
                    </p>
                    <Button href={inquireHref(work.title)} variant="link">
                      {t("inquire")}
                    </Button>
                  </>
                )}
              </div>
            </div>
          </article>
        </Reveal>
        );
      })}
    </div>
  );
}
