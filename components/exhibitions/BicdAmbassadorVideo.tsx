import VideoEmbed from "@/components/ui/VideoEmbed";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { bicdAmbassadorVideo } from "@/lib/data/exhibitions";
import { getTranslations } from "next-intl/server";

export default async function BicdAmbassadorVideo() {
  const t = await getTranslations("exhibitions.bicdVideo");

  return (
    <Reveal>
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:items-center lg:gap-10 xl:grid-cols-[minmax(0,1fr)_minmax(0,28rem)] xl:gap-12">
        <div className="min-w-0">
          <SectionLabel>{t("eyebrow")}</SectionLabel>
          <h2 className="mt-4 text-[clamp(1.5rem,2.5vw,2rem)] font-light leading-[1.12] tracking-[-0.03em] text-foreground">
            {t("title")}
          </h2>
          <p className="mt-4 max-w-lg text-sm font-light leading-[1.75] text-muted sm:text-base">
            {t("description")}
          </p>
          <p className="editorial-label mt-5">{t("credit")}</p>
        </div>

        <div className="min-w-0 lg:justify-self-end lg:w-full">
          <VideoEmbed
            youtubeId={bicdAmbassadorVideo.youtubeId}
            title={t("videoTitle")}
          />
        </div>
      </div>
    </Reveal>
  );
}
