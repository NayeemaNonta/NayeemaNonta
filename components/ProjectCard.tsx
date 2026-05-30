import type { Project } from "@/data/types";
import { assetPath } from "@/lib/utils";

import { Badge } from "./Badge";
import { SmartLink } from "./SmartLink";
import { VisualPlaceholder } from "./VisualPlaceholder";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="card grid overflow-hidden md:grid-cols-[0.95fr_1.25fr]">
      {project.image ? (
        <div className="border-b border-line bg-slate-100 md:border-b-0 md:border-r">
          <img
            src={assetPath(project.image)}
            alt={project.imageAlt || project.title}
            className="h-full min-h-64 w-full object-cover"
          />
        </div>
      ) : (
        <div className="border-b border-line p-4 md:border-b-0 md:border-r">
          <VisualPlaceholder label={project.title} />
        </div>
      )}
      <div className="flex flex-col p-6">
        <div className="mb-4 flex flex-wrap gap-2">
          <Badge>{project.dateRange}</Badge>
          {project.tags.slice(0, 2).map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
        <h2 className="text-xl font-semibold leading-8 text-ink">{project.title}</h2>
        <p className="mt-3 text-sm leading-7 text-slate-600">{project.description}</p>
        {project.collaborators ? (
          <p className="mt-4 text-sm leading-7 text-muted">
            <span className="font-medium text-ink">Collaborators:</span> {project.collaborators}
          </p>
        ) : null}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.slice(2).map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
        {project.awards?.length ? (
          <div className="mt-5 flex flex-wrap gap-2">
            {project.awards.map((award) => (
              <Badge key={award} tone="green">
                {award}
              </Badge>
            ))}
          </div>
        ) : null}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.links.map((link) => (
            <SmartLink key={`${project.title}-${link.label}`} href={link.href} className="button-secondary">
              {link.label}
            </SmartLink>
          ))}
        </div>
      </div>
    </article>
  );
}
