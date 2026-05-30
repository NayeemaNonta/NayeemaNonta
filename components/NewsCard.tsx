import type { NewsItem } from "@/data/news";
import { assetPath } from "@/lib/utils";

import { Badge } from "./Badge";
import { SmartLink } from "./SmartLink";

type NewsCardProps = {
  item: NewsItem;
};

export function NewsCard({ item }: NewsCardProps) {
  return (
    <article className="card grid overflow-hidden md:grid-cols-[0.9fr_1.35fr]">
      <div className="border-b border-line bg-slate-100 md:border-b-0 md:border-r">
        <img
          src={assetPath(item.image)}
          alt={item.imageAlt}
          className="h-full min-h-64 w-full object-cover"
        />
      </div>
      <div className="flex flex-col p-6">
        <div className="mb-5 flex flex-wrap gap-2">
          <Badge tone="green">{item.tag}</Badge>
          <Badge>{item.date}</Badge>
        </div>
        <h2 className="text-xl font-semibold leading-8 text-ink">
          <SmartLink href={item.href} className="transition-colors hover:text-accent">
            {item.title}
          </SmartLink>
        </h2>
        <p className="mt-4 text-sm leading-7 text-slate-600">{item.description}</p>
        <div className="mt-6">
          <SmartLink href={item.href} className="button-secondary">
            Read feature
          </SmartLink>
        </div>
      </div>
    </article>
  );
}
