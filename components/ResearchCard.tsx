import type { ResearchTheme } from "@/data/types";

import { Badge } from "./Badge";

type ResearchCardProps = {
  theme: ResearchTheme;
};

export function ResearchCard({ theme }: ResearchCardProps) {
  return (
    <article className="card group flex h-full flex-col p-6">
      <div className="mb-5 flex flex-wrap items-center gap-2">
        <Badge tone={theme.statusTone}>{theme.status}</Badge>
        {theme.tags.slice(0, 2).map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>
      <h2 className="text-xl font-semibold leading-7 text-ink">{theme.title}</h2>
      <p className="mt-3 text-sm leading-7 text-muted">{theme.summary}</p>
      <p className="mt-5 flex-1 text-sm leading-7 text-slate-600">{theme.description}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {theme.tags.slice(2).map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>
    </article>
  );
}
