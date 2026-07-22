import Image from "next/image";
import Link from "next/link";

type SiteLogoProps = {
  priority?: boolean;
  size?: "nav" | "footer";
};

const sizeClasses = {
  nav: "max-w-[193px] sm:max-w-[239px] lg:max-w-[285px]",
  footer: "max-w-[184px] sm:max-w-[212px]",
} as const;

export default function SiteLogo({
  priority = false,
  size = "nav",
}: SiteLogoProps) {
  return (
    <Link
      href="/"
      className="inline-flex shrink-0 opacity-90 transition-opacity duration-300 hover:opacity-70"
      aria-label="Miroslavo — home"
    >
      <Image
        src="/brand/miroslavo-logo.png"
        alt="Miroslavo"
        width={285}
        height={92}
        priority={priority}
        className={`h-auto w-full ${sizeClasses[size]} dark:brightness-0 dark:invert`}
      />
    </Link>
  );
}
