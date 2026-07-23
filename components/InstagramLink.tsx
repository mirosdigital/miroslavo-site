import { siteConfig } from "@/lib/site";

type InstagramLinkProps = {
  className?: string;
  label: string;
};

export default function InstagramLink({ className = "", label }: InstagramLinkProps) {
  return (
    <a
      href={siteConfig.social.instagram}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`inline-flex text-foreground/75 transition-colors duration-300 hover:text-foreground ${className}`}
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-5 w-5 fill-none stroke-current stroke-[1.5]"
      >
        <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    </a>
  );
}
