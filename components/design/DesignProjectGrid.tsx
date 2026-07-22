import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import DesignGridImage from "@/components/design/design-grid-image";
import {
  designPortfolioSections,
  designProjects,
} from "@/lib/data/designs";
import { getTranslations } from "next-intl/server";

export default async function DesignProjectGrid() {
  const t = await getTranslations("design");

  return (
    <div className="space-y-12 lg:space-y-14">
      {designPortfolioSections.map((section, sectionIndex) => {
        const projects = section.categories.flatMap((category) =>
          designProjects.filter((project) => project.category === category),
        );

        if (projects.length === 0) {
          return null;
        }

        return (
          <section key={section.id}>
            <Reveal delay={sectionIndex * 0.04}>
              <SectionLabel>
                {section.id === "branding-graphic"
                  ? `${t("categories.branding")} & ${t("categories.graphic").toLowerCase()}`
                  : t(`categories.${section.labelKey ?? section.categories[0]}`)}
              </SectionLabel>
            </Reveal>
            <div className="mt-6 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:gap-x-8 lg:gap-y-12 [&>article:last-child:nth-child(odd):not(:only-child)]:sm:col-span-2 [&>article:last-child:nth-child(odd):not(:only-child)]:sm:max-w-xl">
              {projects.map((project, index) => (
                <Reveal
                  key={project.id}
                  delay={sectionIndex * 0.04 + index * 0.05}
                >
                  <article className="group">
                    <div className="relative overflow-hidden bg-surface-muted aspect-[4/3]">
                      <DesignGridImage
                        src={project.image}
                        alt={project.imageAlt}
                        imageClassName={project.imageClassName}
                      />
                    </div>
                    <div className="mt-5 border-t border-border pt-5">
                      <p className="editorial-label">
                        {t(`categories.${project.category}`)}
                      </p>
                      <h2 className="mt-2 text-xl font-normal tracking-[-0.02em] text-foreground">
                        {project.title}
                      </h2>
                      <p className="mt-2 max-w-md text-sm font-light leading-relaxed text-muted">
                        {project.description}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
