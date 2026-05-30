import type { Metadata } from "next";

import { ResearchCard } from "@/components/ResearchCard";
import { SectionHeader } from "@/components/SectionHeader";
import { researchThemes } from "@/data/research";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Research themes for Nayeema Nonta: safe LLM adaptation, refusal geometry, efficient training, and temporal drift."
};

export default function ResearchPage() {
  return (
    <main className="page-shell page-top pb-20">
      <SectionHeader
        eyebrow="Research / 2025-Present"
        title="ML systems that adapt without losing their safety properties."
        description="My research centers on reliable post-training adaptation, tamper-resistance evaluation, and optimization methods that make large models more accessible to study."
      />
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {researchThemes.map((theme) => (
          <ResearchCard key={theme.id} theme={theme} />
        ))}
      </div>
    </main>
  );
}
