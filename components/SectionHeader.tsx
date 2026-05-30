import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  headingLevel?: "h1" | "h2";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  headingLevel = "h1",
  className
}: SectionHeaderProps) {
  const Heading = headingLevel;

  return (
    <div className={cn("max-w-3xl", className)}>
      <p className="mb-3 text-xs font-semibold uppercase text-accent">{eyebrow}</p>
      <Heading className="font-serif text-4xl font-medium leading-tight text-ink sm:text-5xl">
        {title}
      </Heading>
      {description ? (
        <p className="mt-5 text-base leading-8 text-muted sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
