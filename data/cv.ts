import type { ResumeItem } from "./types";

export type SkillGroup = {
  label: string;
  items: string[];
};

export const education: ResumeItem[] = [
  {
    title: "PhD Student, Management Science and Engineering",
    organization: "University of Waterloo, Waterloo, Canada",
    dateRange: "May 2025-Present",
    details: [
      "Cumulative GPA: 93.25",
      "Research areas: AI model security, safeguard preservation, safety benchmarking, data- and compute-efficient training.",
      "Supervisor: Prof. Sirisha Rambhatla."
    ]
  },
  {
    title:
      "Bachelor of Applied Science in Management Engineering (Honours, Co-op) with Computing Option (Distinction)",
    organization: "University of Waterloo, Waterloo, Canada",
    dateRange: "Sep 2019-Apr 2024"
  }
];

export const coursework = [
  "MSCI 240 - Algorithms and Data Structures",
  "MSCI 245 - Databases and Software Design",
  "MSCI 431 - Stochastic Models and Methods",
  "MSCI 342 - Principles of Software Engineering",
  "MSCI 446 - Introduction to Machine Learning",
  "MSCI 332 - Deterministic Optimization Models and Methods",
  "MSCI 452 - Decision Making Under Uncertainty",
  "MSCI 546 - Advanced Machine Learning",
  "MSCI 609 - Quantitative Data Analysis",
  "MSCI 718 - Statistical Methods for Data Analytics",
  "MSCI 641 - Text Analytics (Natural Language Processing)",
  "MSE 720 - Recommender Systems"
];

export const researchExperience: ResumeItem[] = [
  {
    title: "Research Assistant - Machine Learning",
    organization: "University of Waterloo | Critical ML Lab",
    dateRange: "December 2024-Present",
    details: [
      "Developed SAGE, an ongoing research project on safer low-resource LLM fine-tuning using refusal-geometry-aware activation editing (2 ICLR workshop papers); currently extending it with adaptive refusal geometry.",
      "Co-author on SubTrack++ (NeurIPS '25), a memory- and time-efficient full-parameter LLM training method via gradient subspace tracking; implemented method components and additional baselines, ran ablation studies, and scalability analysis.",
      "Conducted research on AI adoption barriers in clinical and healthcare settings in collaboration with Waterloo Regional Health Network; abstract presented at the Institute for Healthcare Improvement Forum."
    ]
  },
  {
    title: "Research Assistant - Network Optimization",
    organization: "University of Waterloo | Prof. Fatma Gzara",
    dateRange: "January 2024-May 2025",
    details: [
      "Developed exact algorithms for an NP-hard constrained shortest path problem on DAGs, cyclic graphs, and SINR-based maps, to optimize UAV path cost while maintaining minimum signal strength to base towers.",
      "Benchmarked algorithms against a MILP formulation solved with Gurobi, achieving 17.87x average speedup and up to 206.33x faster runtime on highly constrained large instances."
    ]
  }
];

export const awards = [
  "Gregory Zhang e-Zinc Award for Capstone Design - awarded to best renewable energy project in the Engineering Faculty, 2024.",
  "Management Engineering Design Award - awarded to outstanding design projects in Management Engineering, 2024."
];

export const presentations: ResumeItem[] = [
  {
    title: "CPI Graduate Student Conference",
    organization: "Poster and spotlight talk",
    dateRange: "Mar 2026",
    details: [
      "Presented Safety-Aware Gated Editing (SAGE): Refusal-Orthogonal Activation Editing for Safe Low-Resource Adaptation at the 2nd Annual Cybersecurity and Privacy Institute Graduate Student Conference."
    ]
  }
];

export const professionalExperience: ResumeItem[] = [
  {
    title: "Machine Learning Software Developer Intern",
    organization: "CoreAVI",
    dateRange: "Sep 2023-Dec 2023"
  },
  {
    title: "Innovation Catalyst Intern (Rapid App Development)",
    organization: "Nuclear Promise X",
    dateRange: "Jan 2023-Apr 2023"
  },
  {
    title: "System Administrator Intern",
    organization: "CoreAVI",
    dateRange: "May 2022-August 2022"
  },
  {
    title: "Business Systems Intern",
    organization: "Nissan",
    dateRange: "Sep 2021-Dec 2021"
  },
  {
    title: "IT Solution Specialist Intern",
    organization: "Sentia",
    dateRange: "Jan 2021-May 2021"
  },
  {
    title: "Digital Retention Analyst Intern",
    organization: "University of Waterloo",
    dateRange: "Jun 2020-Aug 2020"
  }
];

export const reviewingActivity: ResumeItem[] = [
  {
    title: "Reviewer, ICLR 2026 Workshops",
    organization: "International Conference on Learning Representations",
    dateRange: "2026",
    details: [
      "Reviewed submissions for Scaling Post-training for LLMs and Catch, Adapt, Operate: Monitoring Models Under Drift workshops."
    ]
  }
];

export const teachingAssistantExperience: ResumeItem[] = [
  {
    title: "Teaching Assistant",
    organization: "University of Waterloo, Management Science and Engineering",
    dateRange: "Sep 2025-Present",
    details: [
      "MSE 436: Decision Support System (May 2026-Present).",
      "MSE 433: Applications of Management Engineering; MSE 131: Work Design and Facilities Planning (Jan 2026-Apr 2026).",
      "MSE 302: Engineering Design Methods (Sep 2025-Dec 2025)."
    ]
  }
];

export const selectedProjects: ResumeItem[] = [
  {
    title: "Electric Plane Data Visualization and Predictive Analytics",
    organization: "Capstone project with Prof. Mehrdad Pirnia and WISA",
    dateRange: "May 2023-Apr 2024",
    details: [
      "Designed a data analysis and predictive analytics solution to improve management of the Pipistrel Velis Electro, the world's first type-certified electric plane; awarded $4,200 across two awards.",
      "Built a PostgreSQL ETL pipeline to merge flight and local weather data for analyzing Canadian weather impacts on electric aircraft energy efficiency."
    ]
  }
];

export const cvSkillGroups: SkillGroup[] = [
  {
    label: "Programming languages and scripting",
    items: ["Python", "C", "SQL", "R", "Bash"]
  },
  {
    label: "Libraries and tools",
    items: [
      "PyTorch",
      "Hugging Face Transformers",
      "Pandas",
      "NumPy",
      "Gurobi",
      "CUDA/GPU Computing",
      "SLURM",
      "Linux CLI",
      "Git"
    ]
  }
];

export const technicalCertifications = [
  "AWS Certified Cloud Practitioner - ID: 3NQ8VK126JBE17WT",
  "AWS Certified Solutions Architect - Associate - ID: 323c2b3ab4aa4d5c80a7a0251ecf7cb3"
];

export const volunteerLeadership: ResumeItem[] = [
  {
    title: "Equity, Diversity, and Inclusion Director",
    organization: "Women in Engineering, University of Waterloo",
    dateRange: "2025-Present",
    details: [
      "Served as the main point of contact for 14 companies for the WiE Grad career fair; coordinated event communications including logistics, schedules, and booth details.",
      "Coordinated planning and partner communications for collaboration with the Canadian charity Help a Girl Out, including logistics for a panel and period-product collection drive."
    ]
  },
  {
    title: "IISE Canadian Conference at Polytechnique Montreal",
    organization: "University of Waterloo representative",
    dateRange: "2024",
    details: [
      "Represented the University of Waterloo among industry professionals and peers to exchange ideas and expand professional connections."
    ]
  },
  {
    title: "Engineering Ambassador, Orientation Leader, and Orientation Director",
    organization: "University of Waterloo Engineering",
    dateRange: "2019-2023",
    details: [
      "Managed a team of 10 leaders to organize events and ensure an engaging and safe experience for 1,800 students.",
      "Represented Management Engineering at campus events and engaged with prospective students to provide insights about the program."
    ]
  },
  {
    title: "Community Impact Initiatives Leader",
    organization: "Nuclear Promise X",
    dateRange: "2023",
    details: [
      "Led fundraising campaign and hosted charity auction, raising $6,200 for Turkey-Syria earthquake relief."
    ]
  },
  {
    title: "Mentor for First-Year Engineering Students",
    organization: "University of Waterloo",
    dateRange: "2021-2022",
    details: [
      "Mentored first-year students and offered support to help them navigate their academic and campus experience."
    ]
  }
];
