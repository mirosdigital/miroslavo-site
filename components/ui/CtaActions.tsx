import Button from "@/components/ui/Button";

export type CtaAction = {
  href: string;
  label: string;
  external?: boolean;
  variant?: "primary" | "secondary" | "link";
};

type CtaActionsProps = {
  actions: CtaAction[];
  className?: string;
  centered?: boolean;
};

export default function CtaActions({
  actions,
  className = "",
  centered = false,
}: CtaActionsProps) {
  return (
    <div
      className={`flex flex-wrap items-center gap-4 sm:gap-6 ${centered ? "justify-center" : ""} ${className}`}
    >
      {actions.map((action) => (
        <Button
          key={`${action.href}-${action.label}`}
          href={action.href}
          external={action.external}
          variant={action.variant ?? "link"}
        >
          {action.label}
        </Button>
      ))}
    </div>
  );
}
