import type { Metadata } from "next";

import { Badge } from "@/components/Badge";
import { SectionHeader } from "@/components/SectionHeader";
import { SmartLink } from "@/components/SmartLink";
import {
  awards,
  coursework,
  cvSkillGroups,
  education,
  presentations,
  professionalExperience,
  researchExperience,
  reviewingActivity,
  selectedProjects,
  teachingAssistantExperience,
  technicalCertifications,
  volunteerLeadership
} from "@/data/cv";
import { publications } from "@/data/publications";
import type { ResumeItem } from "@/data/types";

export const metadata: Metadata = {
  title: "CV",
  description:
    "Academic CV for Nayeema Nonta, including education, research experience, publications, presentations, teaching, service, skills, and awards."
};

function ResumeBlock({ title, items }: { title: string; items: ResumeItem[] }) {
  return (
    <section className="card p-6">
      <h2 className="text-sm font-semibold uppercase text-accent">{title}</h2>
      <div className="mt-6 space-y-7">
        {items.map((item) => (
          <article
            key={`${item.title}-${item.dateRange}`}
            className="grid gap-3 sm:grid-cols-[11rem_1fr]"
          >
            <p className="text-sm font-medium text-quiet">{item.dateRange}</p>
            <div>
              <h3 className="text-base font-semibold leading-7 text-ink">{item.title}</h3>
              <p className="text-sm leading-7 text-muted">{item.organization}</p>
              {item.details?.length ? (
                <ul className="mt-3 list-disc space-y-2 pl-5">
                  {item.details.map((detail) => (
                    <li key={detail} className="text-sm leading-7 text-slate-600">
                      {detail}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function TextListBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="card p-6">
      <h2 className="text-sm font-semibold uppercase text-accent">{title}</h2>
      <ul className="mt-6 list-disc space-y-3 pl-5">
        {items.map((item) => (
          <li key={item} className="text-sm leading-7 text-slate-600">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

function CourseworkBlock() {
  return (
    <section className="card p-6">
      <h2 className="text-sm font-semibold uppercase text-accent">Courses</h2>
      <ul className="mt-6 grid gap-3 md:grid-cols-2">
        {coursework.map((course) => (
          <li key={course} className="text-sm leading-7 text-slate-600">
            {course}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function CvPage() {
  const cvPublications = publications.filter((publication) => publication.includeInCv !== false);

  return (
    <main className="page-shell page-top pb-20">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <SectionHeader
          eyebrow="CV / Academic"
          title="Nayeema Nonta"
          description="PhD student in Management Science and Engineering at the University of Waterloo, researching LLM systems, post-training, efficient adaptation, model reliability, and safety."
        />
        <div className="card p-6">
          <h2 className="text-sm font-semibold uppercase text-ink">Contact</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            <SmartLink href="mailto:nnonta@uwaterloo.ca" className="button-secondary">
              Email
            </SmartLink>
            <SmartLink href="https://linkedin.com/in/nayeema-nonta" className="button-secondary">
              LinkedIn
            </SmartLink>
            <SmartLink href="https://github.com/NayeemaNonta" className="button-secondary">
              GitHub
            </SmartLink>
            <SmartLink href="/publications" className="button-secondary">
              Publications
            </SmartLink>
          </div>
        </div>
      </div>

      <div className="mt-10 grid gap-6">
        <ResumeBlock title="Education" items={education} />
        <ResumeBlock title="Research Experience" items={researchExperience} />
        <TextListBlock title="Awards" items={awards} />

        <section className="card p-6">
          <h2 className="text-sm font-semibold uppercase text-accent">Publications</h2>
          <div className="mt-6 space-y-5">
            {cvPublications.map((publication) => (
              <article key={`${publication.title}-${publication.venue}`}>
                <div className="mb-2 flex flex-wrap gap-2">
                  <Badge tone={publication.statusTone}>{publication.status}</Badge>
                  {publication.metaBadges?.map((badge) => (
                    <Badge key={badge} tone={publication.statusTone}>
                      {badge}
                    </Badge>
                  ))}
                  <Badge>{publication.venue}</Badge>
                  <Badge>{publication.year}</Badge>
                </div>
                <h3 className="text-base font-semibold leading-7 text-ink">{publication.title}</h3>
                <p className="text-sm leading-7 text-muted">{publication.authors.join(", ")}</p>
              </article>
            ))}
          </div>
        </section>

        <ResumeBlock title="Presentations" items={presentations} />
        <ResumeBlock title="Industry and Professional Experience" items={professionalExperience} />
        <ResumeBlock title="Reviewing Activity" items={reviewingActivity} />

        <section className="card p-6">
          <h2 className="text-sm font-semibold uppercase text-accent">Technical Skills</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {cvSkillGroups.map((group) => (
              <div key={group.label}>
                <h3 className="text-sm font-semibold text-ink">{group.label}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <ResumeBlock title="Volunteer and Leadership Experience" items={volunteerLeadership} />
        <ResumeBlock title="Projects" items={selectedProjects} />
        <TextListBlock title="Technical Certifications" items={technicalCertifications} />
        <CourseworkBlock />
        <ResumeBlock title="Teaching Assistant Experience" items={teachingAssistantExperience} />
      </div>
    </main>
  );
}
