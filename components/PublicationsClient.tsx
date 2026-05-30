"use client";

import { useMemo, useState } from "react";

import { PublicationCard } from "@/components/PublicationCard";
import type { Publication, PublicationType } from "@/data/types";
import { cn } from "@/lib/utils";

type TypeFilter = PublicationType | "all";
type SortKey = "type" | "newest" | "oldest" | "venue" | "title";

const typeSortRank: Record<PublicationType, number> = {
  conference: 0,
  workshop: 1,
  preprint: 2
};

const typeFilters: Array<{ label: string; value: TypeFilter }> = [
  { label: "All", value: "all" },
  { label: "Conference", value: "conference" },
  { label: "Preprint", value: "preprint" },
  { label: "Workshop", value: "workshop" }
];

function publicationYear(publication: Publication) {
  return publication.sortYear ?? (Number.parseInt(publication.year, 10) || 0);
}

export function PublicationsClient({ publications }: { publications: Publication[] }) {
  const [typeFilter, setTypeFilter] = useState<TypeFilter>("all");
  const [venueFilter, setVenueFilter] = useState("all");
  const [sortKey, setSortKey] = useState<SortKey>("type");

  const venueOptions = useMemo(() => {
    return Array.from(
      new Set(publications.flatMap((publication) => publication.venueFilters ?? [publication.venue]))
    ).sort((a, b) => a.localeCompare(b));
  }, [publications]);

  const visiblePublications = useMemo(() => {
    const filteredPublications = publications
      .filter((publication) => typeFilter === "all" || publication.type === typeFilter)
      .filter((publication) => {
        const venues = publication.venueFilters ?? [publication.venue];
        return venueFilter === "all" || venues.includes(venueFilter);
      });

    return [...filteredPublications].sort((a, b) => {
      if (sortKey === "oldest") {
        return publicationYear(a) - publicationYear(b) || a.title.localeCompare(b.title);
      }

      if (sortKey === "venue") {
        return a.venue.localeCompare(b.venue) || b.year.localeCompare(a.year);
      }

      if (sortKey === "title") {
        return a.title.localeCompare(b.title);
      }

      if (sortKey === "type") {
        return (
          typeSortRank[a.type] - typeSortRank[b.type] ||
          publicationYear(b) - publicationYear(a) ||
          a.title.localeCompare(b.title)
        );
      }

      return publicationYear(b) - publicationYear(a) || a.title.localeCompare(b.title);
    });
  }, [publications, sortKey, typeFilter, venueFilter]);

  return (
    <div className="mt-10 space-y-5">
      <section className="card p-4" aria-label="Publication filters">
        <div className="grid gap-4 lg:grid-cols-[1fr_auto_auto] lg:items-end">
          <fieldset>
            <legend className="sr-only">Filter by publication type</legend>
            <div className="flex flex-wrap gap-2">
              {typeFilters.map((filter) => {
                const isSelected = typeFilter === filter.value;

                return (
                  <button
                    key={filter.value}
                    type="button"
                    aria-pressed={isSelected}
                    onClick={() => setTypeFilter(filter.value)}
                    className={cn(
                      "rounded-full border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
                      isSelected
                        ? "border-ink bg-ink text-white hover:border-ink hover:bg-ink hover:text-white"
                        : "border-line bg-white text-muted hover:border-accent hover:text-accent"
                    )}
                  >
                    {filter.label}
                  </button>
                );
              })}
            </div>
          </fieldset>

          <label className="flex flex-col gap-2 text-xs font-semibold uppercase text-muted">
            Venue
            <select
              value={venueFilter}
              onChange={(event) => setVenueFilter(event.target.value)}
              className="min-h-10 rounded-full border border-line bg-white px-4 text-sm font-medium normal-case text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <option value="all">All venues</option>
              {venueOptions.map((venue) => (
                <option key={venue} value={venue}>
                  {venue}
                </option>
              ))}
            </select>
          </label>

          <label className="flex flex-col gap-2 text-xs font-semibold uppercase text-muted">
            Sort
            <select
              value={sortKey}
              onChange={(event) => setSortKey(event.target.value as SortKey)}
              className="min-h-10 rounded-full border border-line bg-white px-4 text-sm font-medium normal-case text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <option value="type">Conferences first</option>
              <option value="newest">Newest first</option>
              <option value="oldest">Oldest first</option>
              <option value="venue">Venue</option>
              <option value="title">Title</option>
            </select>
          </label>
        </div>
        <p className="mt-4 text-sm text-muted">
          Showing {visiblePublications.length} of {publications.length} publications.
        </p>
      </section>

      {visiblePublications.length ? (
        visiblePublications.map((publication) => (
          <PublicationCard
            key={`${publication.title}-${publication.venue}-${publication.status}`}
            publication={publication}
          />
        ))
      ) : (
        <div className="card p-6 text-sm text-muted">No publications match the selected filters.</div>
      )}
    </div>
  );
}
