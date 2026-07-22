import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "link";

type ButtonProps = {
  variant?: ButtonVariant;
  href?: string;
  external?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "border border-foreground bg-foreground text-background hover:bg-transparent hover:text-foreground",
  secondary:
    "border border-border bg-transparent text-foreground hover:border-foreground",
  link: "border-0 bg-transparent px-0 py-0 text-foreground underline-offset-[5px] hover:underline",
};

export default function Button({
  variant = "link",
  href,
  external,
  type = "button",
  disabled,
  className = "",
  children,
  onClick,
}: ButtonProps) {
  const isLink = variant === "link";
  const classes = `inline-flex items-center gap-2 text-sm font-medium transition-colors duration-300 disabled:cursor-not-allowed disabled:opacity-40 ${isLink ? variants.link : `px-7 py-3 ${variants[variant]}`} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          onClick={onClick}
        >
          {children}
        </a>
      );
    }

    if (
      href.startsWith("#") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:")
    ) {
      return (
        <a href={href} className={classes} onClick={onClick}>
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      className={classes}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
