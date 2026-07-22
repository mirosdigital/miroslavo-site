type VideoEmbedProps = {
  youtubeId: string;
  title: string;
  className?: string;
};

export default function VideoEmbed({
  youtubeId,
  title,
  className = "",
}: VideoEmbedProps) {
  return (
    <div className={`relative isolate aspect-video w-full overflow-hidden bg-surface-muted ${className}`}>
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${youtubeId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
        className="absolute inset-0 h-full w-full border-0"
      />
    </div>
  );
}
