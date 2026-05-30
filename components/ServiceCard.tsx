import type { ServiceItem } from "@/data/types";

import { Badge } from "./Badge";

type ServiceCardProps = {
  item: ServiceItem;
};

export function ServiceCard({ item }: ServiceCardProps) {
  return (
    <article className="card flex h-full flex-col p-6">
      <div className="mb-5 flex flex-wrap gap-2">
        <Badge tone={item.statusTone}>{item.status}</Badge>
        <Badge>{item.dateRange}</Badge>
      </div>
      <h2 className="text-xl font-semibold leading-8 text-ink">{item.title}</h2>
      <p className="mt-2 text-sm font-medium text-muted">{item.organization}</p>
      <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">{item.description}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {item.tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>
    </article>
  );
}
