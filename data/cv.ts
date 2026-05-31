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
    title: "Research Assistant",
    organization: "University of Waterloo, Critical ML Lab",
    dateRange: "Dec 2024-Present",
    details: [
      "Developed SAGE (Safety-Aware Gated Editing), a two-stage activation editing method for safe low-resource LLM fine-tuning, resulting in two ICLR 2026 workshop papers.",
      "Contributed to SubTrack++ (NeurIPS 2025), a memory- and time-efficient full-parameter LLM training method via gradient subspace tracking; implemented method components and additional baselines, ran ablation studies, and scalability analysis.",
      "Conducted research on AI adoption barriers in clinical and healthcare settings in collaboration with Waterloo Regional Health Network; abstract presented at the Institute for Healthcare Improvement Forum."
    ]
  },
  {
    title: "Research Assistant",
    organization: "University of Waterloo, Prof. Fatma Gzara",
    dateRange: "Jan 2024-May 2025",
    details: [
      "Developed an efficient label-setting algorithm to solve an NP-hard shortest path problem involving rolling constraints, optimizing UAV path planning for cost while maintaining required base tower signal strength."
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
    dateRange: "Sep 2023-Dec 2023",
    details: [
      "Developed four computer vision projects in C to demonstrate CoreAVI's Vulkan SC based safety-critical AI library, implementing models such as MobileNetV2 CNN and non-linear SVM with RBF kernel from scratch for image classification and frequency domain image filtering.",
      "Created a Python script to streamline installation of PyTorch model data, converting from torchvision to ONNX to NNEF for deterministic inference in a safety-critical API.",
      "Wrote image preprocessing scripts to resize, format, and convert input data for compatibility with different deep learning model architectures."
    ]
  },
  {
    title: "Innovation Catalyst Intern (Rapid App Development)",
    organization: "Nuclear Promise X",
    dateRange: "Jan 2023-Apr 2023",
    details: [
      "Developed Power Apps applications to digitize nuclear PMIS procedures for Bruce Power and Ontario Power Generation, increasing efficiency and reliability in accessing and managing records.",
      "Implemented database stored procedures and views using SQL, reducing database maintenance time by 15%.",
      "Fine-tuned an LLM to streamline product user-guide generation using feature engineering and data validation.",
      "Built and tested Azure DevOps pipelines to establish CI/CD and streamline deployment."
    ]
  },
  {
    title: "System Administrator Intern",
    organization: "CoreAVI",
    dateRange: "May 2022-August 2022",
    details: [
      "Investigated non-compliant devices using Microsoft Intune and JIRA. Triaged and resolved issues and used root cause analysis to prevent future incidents, leading to a 74% reduction in non-compliant devices over a quarter.",
      "Improved ticket throughput by scaling access workflows with Power Automate and swimlane analysis, reducing redundant approvals while maintaining least-privilege governance."
    ]
  },
  {
    title: "Business Systems Intern",
    organization: "Nissan",
    dateRange: "Sep 2021-Dec 2021",
    details: [
      "Coordinated agile daily scrums and cross-functional sprint planning for Salesforce CRM deployment.",
      "Created and executed 150+ UAT/SIT tests for CRM, ensuring functional requirements were met.",
      "Managed business-critical issues on JIRA; escalated risks to vendors, managed stakeholders, and processed change requests."
    ]
  },
  {
    title: "IT Solution Specialist Intern",
    organization: "Sentia",
    dateRange: "Jan 2021-May 2021",
    details: [
      "Automated and digitized manual processes, and improved IT change management workflow by applying Microsoft Solutions Framework and ITIL guidelines."
    ]
  },
  {
    title: "Digital Retention Analyst Intern",
    organization: "University of Waterloo",
    dateRange: "Jun 2020-Aug 2020",
    details: [
      "Conducted competitive analysis of communication platforms to develop solutions that improved online education delivery and student connectivity during COVID-19."
    ]
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
