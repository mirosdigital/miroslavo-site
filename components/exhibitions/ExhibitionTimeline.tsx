import Reveal from "@/components/ui/Reveal";
import { exhibitionTimeline } from "@/lib/data/exhibitions";
import { getTranslations } from "next-intl/server";

export default async function ExhibitionTimeline() {
  const t = await getTranslations("exhibitions");

  return (
    <div className="space-y-16 lg:space-y-20">
      {exhibitionTimeline.map((yearGroup, groupIndex) => (
        <Reveal key={yearGroup.year} delay={groupIndex * 0.04}>
          <section>
            <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-light tracking-[-0.03em] text-foreground">
              {yearGroup.year}
            </h2>
            <ul className="mt-8 divide-y divide-border border-y border-border">
              {yearGroup.entries.map((entry) => (
                <li
                  key={`${yearGroup.year}-${entry.when}-${entry.event}`}
                  className="grid gap-2 py-5 sm:grid-cols-[7rem_minmax(0,1fr)] sm:gap-x-8 lg:grid-cols-[8rem_minmax(0,1fr)]"
                >
                  <p className="editorial-label text-muted-light">
                    {entry.when}
                  </p>
                  <div className="min-w-0">
                    <p className="text-sm font-light leading-relaxed text-foreground sm:text-base">
                      {entry.event}
                    </p>
                    <p className="mt-1 text-sm font-light leading-relaxed text-muted">
                      {entry.where}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </Reveal>
      ))}

      <p className="text-sm font-light leading-relaxed text-muted-light">
        {t("timelineNote")}
      </p>
    </div>
  );
}
