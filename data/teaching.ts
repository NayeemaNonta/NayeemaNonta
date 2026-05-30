import type { ServiceItem } from "./types";

export const teachingService: ServiceItem[] = [
  {
    title: "Teaching Assistant",
    organization: "University of Waterloo, Management Science and Engineering",
    dateRange: "Sep 2025-Present",
    description:
      "TA for MSE 436 Decision Support System, MSE 433 Applications of Management Engineering, MSE 131 Work Design and Facilities Planning, and MSE 302 Engineering Design Methods.",
    tags: ["Teaching", "Decision support", "Engineering design"],
    status: "Teaching",
    statusTone: "blue"
  },
  {
    title: "Reviewer, ICLR 2026 Workshops",
    organization: "International Conference on Learning Representations",
    dateRange: "2026",
    description:
      "Reviewed submissions for Scaling Post-training for LLMs and Catch, Adapt, Operate: Monitoring Models Under Drift workshops.",
    tags: ["Reviewing", "LLM post-training", "Model drift"],
    status: "Service",
    statusTone: "violet"
  },
  {
    title: "CPI Graduate Student Conference",
    organization: "Cybersecurity and Privacy Institute",
    dateRange: "Mar 2026",
    description:
      "Presented SAGE as a poster and spotlight talk at the 2nd Annual CPI Graduate Student Conference.",
    tags: ["Talk", "Poster", "AI safety"],
    status: "Presentation",
    statusTone: "green"
  },
  {
    title: "Equity, Diversity, and Inclusion Director",
    organization: "Women in Engineering, University of Waterloo",
    dateRange: "2025-Present",
    description:
      "Main point of contact for 14 companies for the WiE Grad career fair, with additional planning and partner communications for community-focused programming.",
    tags: ["Leadership", "EDI", "Community"],
    status: "Service",
    statusTone: "green"
  },
  {
    title: "Engineering Ambassador / Orientation Leader and Director",
    organization: "University of Waterloo Engineering",
    dateRange: "2019-2023",
    description:
      "Managed a team of 10 leaders, supported orientation programming for 1,800 students, and represented Management Engineering at campus events.",
    tags: ["Mentoring", "Outreach", "Leadership"],
    status: "Leadership",
    statusTone: "slate"
  },
  {
    title: "Mentor for First-Year Engineering Students",
    organization: "University of Waterloo",
    dateRange: "2021-2022",
    description:
      "Mentored first-year students and offered support to help them navigate their academic and campus experience.",
    tags: ["Mentoring", "Student support", "Engineering"],
    status: "Mentoring",
    statusTone: "slate"
  }
];
