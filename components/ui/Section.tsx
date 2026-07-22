import Container from "./Container";

type SectionProps = {
  children: React.ReactNode;
  id?: string;
  ariaLabelledby?: string;
  className?: string;
  containerClassName?: string;
  wide?: boolean;
  padTop?: "default" | "tight" | "none";
  padBottom?: "default" | "tight" | "none";
};

const padTopClasses = {
  none: "",
  tight: "pt-24 lg:pt-32",
  default: "pt-32 lg:pt-48",
} as const;

const padBottomClasses = {
  none: "",
  tight: "pb-24 lg:pb-32",
  default: "pb-32 lg:pb-48",
} as const;

export default function Section({
  children,
  id,
  ariaLabelledby,
  className = "",
  containerClassName = "",
  wide = false,
  padTop = "default",
  padBottom = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledby}
      className={`scroll-mt-28 ${padTopClasses[padTop]} ${padBottomClasses[padBottom]} ${className}`}
    >
      <Container wide={wide} className={containerClassName}>
        {children}
      </Container>
    </section>
  );
}
