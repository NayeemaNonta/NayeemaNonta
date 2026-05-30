import type { Metadata } from "next";

import { NewsCard } from "@/components/NewsCard";
import { SectionHeader } from "@/components/SectionHeader";
import { newsItems } from "@/data/news";

export const metadata: Metadata = {
  title: "News / Media",
  description:
    "News, media features, and public updates about Nayeema Nonta's research."
};

export default function NewsPage() {
  return (
    <main className="page-shell page-top pb-20">
      <SectionHeader
        eyebrow="News / Media"
        title="Research updates and media features."
        description="Selected coverage, announcements, and public-facing updates about my work."
      />
      <div className="mt-10 grid gap-6">
        {newsItems.map((item) => (
          <NewsCard key={item.title} item={item} />
        ))}
      </div>
    </main>
  );
}
