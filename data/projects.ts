import type { Project } from "./types";

export const projects: Project[] = [
  {
    title: "Lightweight adaptation for sequential recommenders",
    description:
      "A study of post-deployment adaptation for SASRec, comparing last-block fine-tuning, context-gated adapters, and prototype steering with a shared evaluation protocol.",
    tags: [
      "Sequential recommendation",
      "Post-deployment adaptation",
      "SASRec",
      "Lightweight adaptation",
      "Recommender systems"
    ],
    dateRange: "April 2026",
    image: "/images/Sequential_Rec.png",
    imageAlt: "Sequential recommendation adaptation methods",
    links: [
      {
        label: "Code",
        href: "https://github.com/NayeemaNonta/SEQREC_ADAPT",
        type: "code"
      },
      {
        label: "Slides",
        href: "https://github.com/NayeemaNonta/SEQREC_ADAPT/blob/main/MSE720_FinalProject_Slides.pdf",
        type: "slides"
      }
    ]
  },
  {
    title: "ElectriFly - Electric plane data analysis and decision support",
    description:
      "A capstone platform for analyzing Pipistrel Velis Electro flight data, optimizing schedules with weather forecasts, and predicting battery consumption in Canadian conditions.",
    tags: ["Machine learning", "Decision support", "Aviation", "Optimization"],
    dateRange: "May 2023-Apr 2024",
    image: "/ElectriFly/ElectriFly.png",
    imageAlt: "ElectriFly project interface",
    collaborators: "Meenakshi Andoorveedu, Peter Twarecki, Joanna Yang, Vikram Bhatt",
    links: [
      { label: "Slides", href: "/ElectriFly/ElectriFly%20Slides.pdf", type: "slides" },
      { label: "Poster", href: "/ElectriFly/ElectriFlyPoster.pdf", type: "poster" }
    ],
    awards: ["Management Engineering Design Award", "Gregory Zhang - e-Zinc Award"]
  }
];
