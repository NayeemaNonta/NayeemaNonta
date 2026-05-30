import type { ResearchTheme } from "./types";

export const researchThemes: ResearchTheme[] = [
  {
    id: "safe-llm-adaptation",
    title: "Safe and efficient LLM adaptation",
    summary: "Post-training methods that preserve model utility while limiting unsafe drift.",
    description:
      "I am interested in adaptation pipelines that make LLMs more useful without making them brittle: parameter-efficient updates, safety-preserving fine-tuning, and evaluation protocols that expose failure modes early.",
    tags: ["LLM adaptation", "PEFT", "Post-training", "Evaluation"],
    status: "Ongoing",
    statusTone: "green"
  },
  {
    id: "refusal-geometry",
    title: "Refusal geometry and model safety",
    summary: "Understanding how refusal behavior shifts across model internals and attacks.",
    description:
      "This theme studies refusal behavior as a geometric and representational object: where safety boundaries live, how they move during tampering, and which interventions keep them stable.",
    tags: ["Refusals", "Representation space", "Safety", "Mechanistic analysis"],
    status: "Ongoing",
    statusTone: "green"
  },
  {
    id: "efficient-training",
    title: "Efficient training and optimization",
    summary: "Gradient-subspace methods for reducing memory and wall-time costs in LLM training.",
    description:
      "My work in this area focuses on optimization methods that lower training cost without losing convergence quality, especially low-rank and subspace-aware approaches for large models.",
    tags: ["Optimization", "Subspace methods", "LLM training", "Scalability"],
    status: "Published",
    statusTone: "blue"
  },
  {
    id: "temporal-drift",
    title: "Sequential recommendation / temporal drift",
    summary: "Models and evaluation setups for systems whose user behavior changes over time.",
    description:
      "Earlier and adjacent work explores how predictive systems handle changing preferences, delayed feedback, and time-dependent signals in recommendation and decision-support settings.",
    tags: ["Sequential models", "Temporal drift", "Recommendation", "Robustness"],
    status: "Exploratory",
    statusTone: "slate"
  }
];

export const featuredResearchIds = [
  "safe-llm-adaptation",
  "refusal-geometry",
  "efficient-training"
];
