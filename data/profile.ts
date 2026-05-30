import type { LinkItem } from "./types";

export const profile = {
  name: "Nayeema Nonta",
  role: "PhD student / LLM systems, post-training, and efficient adaptation",
  affiliation: "University of Waterloo, Critical ML Lab",
  location: "Waterloo, Ontario",
  tagline: "ML systems, safe adaptation, and efficient training.",
  identity:
    "I'm a PhD student at the Critical ML Lab researching LLM systems, with an emphasis on post-training, efficient adaptation, tamper resistance, and reliable model behavior.",
  image: "/images/NN.png",
  email: "nnonta@uwaterloo.ca",
  links: [
    { label: "CV", href: "/cv" },
    {
      label: "Google Scholar",
      href: "https://scholar.google.com/citations?user=mkqfdZEAAAAJ&hl=en&oi=ao"
    },
    { label: "GitHub", href: "https://github.com/NayeemaNonta" },
    { label: "Email", href: "mailto:nnonta@uwaterloo.ca" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/nayeema-nonta/" }
  ] satisfies LinkItem[],
  currently: [
    "Safe post-training for open-weight LLMs.",
    "Tamper-resistance evaluation under fine-tuning and representation attacks.",
    "Memory- and time-efficient training methods."
  ]
};
