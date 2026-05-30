import type { Publication } from "@/data/types";

import { Badge } from "./Badge";
import { SmartLink } from "./SmartLink";

type PublicationCardProps = {
  publication: Publication;
};

export function PublicationCard({ publication }: PublicationCardProps) {
  return (
    <article className="card p-6">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
        <div className="min-w-0 lg:flex-1 lg:pr-6">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge tone={publication.statusTone}>{publication.status}</Badge>
            <Badge>{publication.venue}</Badge>
            <Badge>{publication.year}</Badge>
          </div>
          <h2 className="max-w-4xl text-xl font-semibold leading-8 text-ink">
            {publication.title}
          </h2>
          <p className="mt-3 text-sm leading-7 text-muted">
            {publication.authors.map((author, index) => (
              <span key={author}>
                <span className={author === "Nayeema Nonta" ? "font-semibold text-ink" : undefined}>
                  {author}
                </span>
                {index < publication.authors.length - 1 ? ", " : ""}
              </span>
            ))}
          </p>
        </div>
        {publication.links.length ? (
          <div className="flex flex-wrap gap-2 lg:shrink-0 lg:justify-end">
            {publication.links.map((link) => (
              <SmartLink key={`${publication.title}-${link.label}`} href={link.href} className="button-secondary">
                {link.label}
              </SmartLink>
            ))}
          </div>
        ) : null}
      </div>
      <p className="mt-5 max-w-4xl text-sm leading-7 text-slate-600">{publication.summary}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {publication.tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>
      {publication.bibtex ? (
        <details className="mt-6 rounded-lg border border-line bg-slate-50 px-4 py-3">
          <summary className="cursor-pointer text-sm font-medium text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
            BibTeX
          </summary>
          <pre className="mt-4 overflow-x-auto whitespace-pre text-xs leading-6 text-muted">
            {publication.bibtex}
          </pre>
        </details>
      ) : null}
    </article>
  );
}
