"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SiteLogo from "@/components/SiteLogo";
import ThemeToggle from "@/components/ThemeToggle";
import { Link, usePathname } from "@/i18n/navigation";
import {
  getNavHref,
  getSectionId,
  navItems,
  sectionHref,
  type NavItem,
} from "@/lib/i18n/paths";
import { siteConfig } from "@/lib/site";
import { useTranslations } from "next-intl";

function scrollToSection(sectionId: string) {
  const target = document.getElementById(sectionId);
  if (!target) {
    return false;
  }

  target.scrollIntoView({ behavior: "smooth", block: "start" });
  window.history.pushState(null, "", `#${sectionId}`);
  return true;
}

function NavLink({
  item,
  label,
  isHome,
  onSectionClick,
}: {
  item: NavItem;
  label: string;
  isHome: boolean;
  onSectionClick: (
    event: React.MouseEvent<HTMLAnchorElement>,
    section: Extract<NavItem, { kind: "section" }>["section"],
  ) => void;
}) {
  const className =
    "text-[0.9375rem] font-medium tracking-[-0.01em] text-foreground transition-opacity duration-300 hover:opacity-60";

  if (item.kind === "page") {
    return (
      <Link href={item.path} className={className}>
        {label}
      </Link>
    );
  }

  if (isHome) {
    return (
      <a
        href={sectionHref(item.section)}
        onClick={(event) => onSectionClick(event, item.section)}
        className={className}
      >
        {label}
      </a>
    );
  }

  return (
    <Link href={getNavHref(item)} className={className}>
      {label}
    </Link>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const t = useTranslations("nav");
  const tc = useTranslations("common");

  function handleSectionClick(
    event: React.MouseEvent<HTMLAnchorElement>,
    section: Extract<NavItem, { kind: "section" }>["section"],
  ) {
    event.preventDefault();
    scrollToSection(getSectionId(section));
    setIsOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
      <Container wide>
        <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4 py-5 sm:gap-6 lg:py-6">
          <div className="shrink-0">
            <SiteLogo priority />
          </div>

          <nav
            className="hidden justify-self-center lg:block"
            aria-label={tc("mainNav")}
          >
            <ul className="flex items-center gap-x-7 xl:gap-x-9">
              {navItems.map((item) => (
                <li key={item.key}>
                  <NavLink
                    item={item}
                    label={t(item.key)}
                    isHome={isHome}
                    onSectionClick={handleSectionClick}
                  />
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex shrink-0 items-center justify-end gap-4 sm:gap-5">
            <ThemeToggle className="hidden sm:inline-flex" />
            <Button
              href={`mailto:${siteConfig.email}`}
              variant="secondary"
              className="hidden sm:inline-flex"
            >
              {t("inquire")}
            </Button>

            <button
              type="button"
              className="text-[0.9375rem] font-medium tracking-[-0.01em] text-foreground lg:hidden"
              aria-expanded={isOpen}
              aria-controls="mobile-nav"
              aria-label={isOpen ? tc("close") : tc("menu")}
              onClick={() => setIsOpen((open) => !open)}
            >
              {isOpen ? tc("close") : tc("menu")}
            </button>
          </div>
        </div>

        {isOpen ? (
          <nav
            id="mobile-nav"
            className="border-t border-border pb-10 pt-8 lg:hidden"
            aria-label={tc("mobileNav")}
          >
            <div className="flex flex-col gap-6">
              {navItems.map((item) =>
                item.kind === "page" ? (
                  <Link
                    key={item.key}
                    href={item.path}
                    className="text-3xl font-light tracking-[-0.03em] text-foreground"
                    onClick={() => setIsOpen(false)}
                  >
                    {t(item.key)}
                  </Link>
                ) : isHome ? (
                  <a
                    key={item.key}
                    href={sectionHref(item.section)}
                    onClick={(event) => handleSectionClick(event, item.section)}
                    className="text-3xl font-light tracking-[-0.03em] text-foreground"
                  >
                    {t(item.key)}
                  </a>
                ) : (
                  <Link
                    key={item.key}
                    href={getNavHref(item)}
                    className="text-3xl font-light tracking-[-0.03em] text-foreground"
                    onClick={() => setIsOpen(false)}
                  >
                    {t(item.key)}
                  </Link>
                ),
              )}
            </div>
            <div className="mt-10 flex items-center justify-between gap-4 border-t border-border pt-8">
              <ThemeToggle />
              <Button href={`mailto:${siteConfig.email}`} variant="secondary">
                {t("inquire")}
              </Button>
            </div>
          </nav>
        ) : null}
      </Container>
    </header>
  );
}
