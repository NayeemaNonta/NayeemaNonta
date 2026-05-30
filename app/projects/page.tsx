import type { Metadata } from "next";

import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeader } from "@/components/SectionHeader";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Academic and applied ML projects by Nayeema Nonta, including ElectriFly, predictive modeling, and optimization projects."
};

export default function ProjectsPage() {
  return (
    <main className="page-shell page-top pb-20">
      <SectionHeader
        eyebrow="Projects / Portfolio"
        title="Applied ML, decision support, and research-adjacent builds."
        description="Academic and applied work."
      />
      <div className="mt-10 grid gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </main>
  );
}
