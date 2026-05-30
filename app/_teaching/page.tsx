import type { Metadata } from "next";

import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { teachingService } from "@/data/teaching";

export const metadata: Metadata = {
  title: "Teaching / Service",
  description:
    "Teaching, service, mentoring, talks, and community work by Nayeema Nonta."
};

export default function TeachingPage() {
  return (
    <main className="page-shell page-top pb-20">
      <SectionHeader
        eyebrow="Teaching / Service"
        title="Teaching, service, mentoring, and research community work."
        description="TA work, tutorials, reading groups, conference service, mentoring, talks, and leadership roles."
      />
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {teachingService.map((item) => (
          <ServiceCard key={`${item.title}-${item.dateRange}`} item={item} />
        ))}
      </div>
    </main>
  );
}
