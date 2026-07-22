import Image from "next/image";

type DesignGridImageProps = {
  src: string;
  alt: string;
  imageClassName?: string;
};

export function designImageClass(imageClassName?: string) {
  return `object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.015] ${imageClassName ?? ""}`;
}

export default function DesignGridImage({
  src,
  alt,
  imageClassName,
}: DesignGridImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      className={designImageClass(imageClassName)}
      sizes="(max-width: 640px) 100vw, 50vw"
    />
  );
}
