import { cn } from "@/lib/utils";

type VisualPlaceholderProps = {
  label?: string;
  className?: string;
};

export function VisualPlaceholder({ label = "Research system", className }: VisualPlaceholderProps) {
  return (
    <div
      className={cn(
        "relative flex aspect-[4/3] min-h-44 overflow-hidden rounded-lg border border-line bg-slate-100",
        className
      )}
      aria-label={label}
      role="img"
    >
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(40,124,120,0.09)_1px,transparent_1px),linear-gradient(0deg,rgba(20,33,61,0.08)_1px,transparent_1px)] bg-[size:28px_28px]" />
      <div className="absolute left-6 right-6 top-8 h-px bg-accent/35" />
      <div className="absolute bottom-8 left-6 right-12 h-px bg-clay/35" />
      <div className="absolute left-8 top-16 h-20 w-px bg-lavender/40" />
      <div className="absolute bottom-12 right-8 top-12 w-px bg-moss/35" />
      <div className="relative m-auto rounded-full border border-line bg-white/80 px-4 py-2 text-xs font-medium text-muted shadow-card">
        {label}
      </div>
    </div>
  );
}
