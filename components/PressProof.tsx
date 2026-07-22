import LogoMarquee from "@/components/ui/LogoMarquee";
import { getPressLogos } from "@/lib/data/press-logos";
import { getTranslations } from "next-intl/server";

export default async function PressProof() {
  const t = await getTranslations("pressProof");
  const tc = await getTranslations("common");
  const pressLogos = getPressLogos();

  return (
    <section
      className="border-y border-border bg-surface py-14 sm:py-16"
      aria-label={tc("socialProof")}
    >
      <p className="editorial-label mb-8 text-center">{t("asSeenIn")}</p>
      <LogoMarquee logos={pressLogos} durationSeconds={48} />
    </section>
  );
}
