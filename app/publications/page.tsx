import type { Metadata } from "next";

import { PublicationsClient } from "@/components/PublicationsClient";
import { SectionHeader } from "@/components/SectionHeader";
import { publications } from "@/data/publications";

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Publications and preprints by Nayeema Nonta, with paper links, code links, and BibTeX."
};

export default function PublicationsPage() {
  return (
    <main className="page-shell page-top pb-20">
      <SectionHeader
        eyebrow="Publications / Papers"
        title="Papers, preprints, and research artifacts."
        description="Research outputs across LLM safety, tamper-resistance evaluation, and efficient training methods."
      />
      <PublicationsClient publications={publications} />
    </main>
  );
}
