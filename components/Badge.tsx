import type { ReactNode } from "react";

import type { StatusTone } from "@/data/types";
import { cn } from "@/lib/utils";

const toneClasses: Record<StatusTone, string> = {
  blue: "border-sky-200 bg-sky-50 text-sky-800",
  green: "border-emerald-200 bg-emerald-50 text-emerald-800",
  amber: "border-amber-200 bg-amber-50 text-amber-800",
  rose: "border-rose-200 bg-rose-50 text-rose-800",
  slate: "border-slate-200 bg-slate-50 text-slate-700",
  violet: "border-violet-200 bg-violet-50 text-violet-800"
};

type BadgeProps = {
  children: ReactNode;
  tone?: StatusTone;
  className?: string;
};

export function Badge({ children, tone = "slate", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex min-h-7 items-center rounded-full border px-3 py-1 text-xs font-medium",
        toneClasses[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
