import ClientLocationsMap from "@/components/ClientLocationsMap";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import { getTranslations } from "next-intl/server";

export default async function ClientLocations() {
  const t = await getTranslations("clientLocations");

  return (
    <Section wide className="bg-background" ariaLabelledby="client-locations-heading">
      <Reveal className="text-center">
        <h2
          id="client-locations-heading"
          className="text-[clamp(1.5rem,2.5vw,2rem)] font-light tracking-[-0.03em] text-foreground"
        >
          {t("title")}
        </h2>
      </Reveal>

      <Reveal delay={0.08} className="mt-12 sm:mt-14">
        <ClientLocationsMap />
      </Reveal>
    </Section>
  );
}
