import { Badge } from "@/components/Badge";
import { ResearchCard } from "@/components/ResearchCard";
import { SectionHeader } from "@/components/SectionHeader";
import { SmartLink } from "@/components/SmartLink";
import { publications } from "@/data/publications";
import { profile } from "@/data/profile";
import { featuredResearchIds, researchThemes } from "@/data/research";
import { assetPath } from "@/lib/utils";

export default function HomePage() {
  const featuredResearch = featuredResearchIds
    .map((id) => researchThemes.find((theme) => theme.id === id))
    .filter((theme): theme is (typeof researchThemes)[number] => Boolean(theme));
  const featuredPublications = publications.slice(0, 2);

  return (
    <main>
      <section className="page-shell page-top pb-12 sm:pb-16">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase text-accent">
              {profile.affiliation}
            </p>
            <h1 className="max-w-4xl font-serif text-5xl font-medium leading-tight text-ink sm:text-6xl">
              {profile.name}
            </h1>
            <p className="mt-5 max-w-2xl text-2xl leading-9 text-slate-700">
              {profile.tagline}
            </p>
            <p className="mt-5 max-w-3xl text-base leading-8 text-muted sm:text-lg">
              {profile.identity}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {profile.links.map((link, index) => (
                <SmartLink
                  key={link.label}
                  href={link.href}
                  className={index === 0 ? "button-primary" : "button-secondary"}
                >
                  {link.label}
                </SmartLink>
              ))}
            </div>
          </div>

          <div className="mx-auto w-full max-w-sm space-y-6 lg:max-w-none">
            <div className="flex justify-center">
              <img
                src={assetPath(profile.image)}
                alt="Portrait of Nayeema Nonta"
                className="h-56 w-56 rounded-full border border-line bg-white object-cover p-1 shadow-card"
              />
            </div>
            <aside className="card p-6">
              <div className="mb-5 flex items-center justify-between gap-4">
                <h2 className="text-sm font-semibold uppercase text-ink">Currently</h2>
                <Badge tone="green">2025-Present</Badge>
              </div>
              <ul className="space-y-4">
                {profile.currently.map((item) => (
                  <li key={item} className="border-l border-line pl-4 text-sm leading-7 text-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section className="page-shell section-space">
        <SectionHeader
          eyebrow="Publications / Selected"
          title="Recent work."
          description="Selected papers and preprints. Full records include links and BibTeX blocks on the publications page."
          headingLevel="h2"
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {featuredPublications.map((publication) => (
            <article key={publication.title} className="card p-6">
              <div className="mb-4 flex flex-wrap gap-2">
                <Badge tone={publication.statusTone}>{publication.status}</Badge>
                <Badge>{publication.year}</Badge>
              </div>
              <h3 className="text-lg font-semibold leading-7 text-ink">{publication.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{publication.summary}</p>
              <div className="mt-5">
                <SmartLink href="/publications" className="button-secondary">
                  View publication
                </SmartLink>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="page-shell section-space">
        <SectionHeader
          eyebrow="Research / Featured"
          title="Research threads at the intersection of safety and efficiency."
          description="A compact view of the questions I am most focused on: how models adapt, how safety boundaries shift, and how training can become cheaper without becoming less reliable."
          headingLevel="h2"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {featuredResearch.map((theme) => (
            <ResearchCard key={theme.id} theme={theme} />
          ))}
        </div>
      </section>
    </main>
  );
}
