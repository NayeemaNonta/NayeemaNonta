export type LinkItem = {
  label: string;
  href: string;
};

export type StatusTone = "blue" | "green" | "amber" | "rose" | "slate" | "violet";
export type PublicationType = "conference" | "preprint" | "workshop";

export type TaggedLink = LinkItem & {
  type?: "paper" | "code" | "poster" | "slides" | "site" | "project" | "report";
};

export type ResearchTheme = {
  id: string;
  title: string;
  summary: string;
  description: string;
  tags: string[];
  status: string;
  statusTone: StatusTone;
};

export type Publication = {
  title: string;
  authors: string[];
  venue: string;
  venueFilters?: string[];
  year: string;
  status: string;
  type: PublicationType;
  statusTone: StatusTone;
  summary: string;
  tags: string[];
  links: TaggedLink[];
  bibtex?: string;
  includeInCv?: boolean;
  sortYear?: number;
  metaBadges?: string[];
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  dateRange: string;
  links: TaggedLink[];
  image?: string;
  imageAlt?: string;
  collaborators?: string;
  awards?: string[];
};

export type ServiceItem = {
  title: string;
  organization: string;
  dateRange: string;
  description: string;
  tags: string[];
  status: string;
  statusTone: StatusTone;
};

export type ResumeItem = {
  title: string;
  organization: string;
  dateRange: string;
  details?: string[];
};
