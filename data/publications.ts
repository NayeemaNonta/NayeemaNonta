import type { Publication } from "./types";

export const publications: Publication[] = [
  {
    title: "TamperBench: Systematically Stress-Testing LLM Safety Under Fine-Tuning and Tampering",
    authors: [
      "Saad Hossain",
      "Tom Tseng",
      "Punya Syon Pandey",
      "Samanvay Vajpayee",
      "Matthew Kowal",
      "Nayeema Nonta",
      "Samuel Simko",
      "Stephen Casper",
      "Zhijing Jin",
      "Kellin Pelrine",
      "Sirisha Rambhatla"
    ],
    venue: "KDD",
    venueFilters: ["KDD"],
    year: "2026",
    sortYear: 2026,
    status: "Conference",
    type: "conference",
    statusTone: "blue",
    summary:
      "A systematic framework for stress-testing LLM safety under fine-tuning and tampering.",
    tags: ["LLM safety", "Tamper resistance", "Benchmarking", "Evaluation", "KDD", "Oral"],
    links: [
      { label: "OpenReview", href: "https://openreview.net/forum?id=R5TNXfdPn8", type: "paper" },
      { label: "Code", href: "https://github.com/criticalml-uw/TamperBench", type: "code" }
    ],
    bibtex: `@inproceedings{
hossain2026tamperbench,
title={TamperBench: Systematically Stress-Testing {LLM} Safety Under Fine-Tuning and Tampering},
author={Saad Hossain and Tom Tseng and Punya Syon Pandey and Samanvay Vajpayee and Matthew Kowal and Nayeema Nonta and Samuel Simko and Stephen Casper and Zhijing Jin and Kellin Pelrine and Sirisha Rambhatla},
booktitle={KDD 2026 Datasets and Benchmarks Track (Cycle 2)},
year={2026},
url={https://openreview.net/forum?id=R5TNXfdPn8}
}`
  },
  {
    title: "SubTrack++: Gradient Subspace Tracking for Scalable LLM Training",
    authors: ["Sahar Rajabi", "Nayeema Nonta", "Sirisha Rambhatla"],
    venue: "NeurIPS",
    venueFilters: ["NeurIPS"],
    year: "2025",
    sortYear: 2025,
    status: "Conference",
    type: "conference",
    statusTone: "blue",
    summary:
      "A gradient-subspace tracking method for scalable LLM training that reduces wall-time while preserving the reduced memory footprint.",
    tags: ["Optimization", "LLM training", "Gradient subspaces", "Efficiency"],
    links: [
      {
        label: "Paper",
        href: "https://papers.neurips.cc/paper_files/paper/2025/hash/2d62cb71e87ae340e3ab0e874befcbc2-Abstract-Conference.html",
        type: "paper"
      },
      { label: "OpenReview", href: "https://openreview.net/forum?id=6geRIdlFWJ", type: "paper" },
      { label: "Slides", href: "https://neurips.cc/media/neurips-2025/Slides/119775.pdf", type: "slides" },
      { label: "Code", href: "https://github.com/criticalml-uw/SubTrack", type: "code" }
    ],
    bibtex: `@inproceedings{rajabi2025subtrack++,
  title={SubTrack++: Gradient Subspace Tracking for Scalable LLM Training},
  author={Rajabi, Sahar and Nonta, Nayeema and Rambhatla, Sirisha},
  booktitle={39th Conference on Neural Information Processing Systems (NeurIPS 2025)},
  year={2025}
}`
  },
  {
    title: "Refusal-Orthogonal Gated Editing for Safer Localized LLM Adaptation",
    authors: ["Nayeema Nonta", "Sirisha Rambhatla"],
    venue: "ICLR Workshop on Test-Time Updates",
    venueFilters: ["ICLR"],
    year: "2026",
    sortYear: 2026,
    status: "Workshop",
    type: "workshop",
    statusTone: "violet",
    summary:
      "Workshop paper on safer localized LLM adaptation using refusal-orthogonal gated editing.",
    tags: [
      "AI safeguard protection",
      "Refusal geometry",
      "ICLR",
      "Activation editing",
      "Efficient fine-tuning"
    ],
    links: [],
    bibtex: `@inproceedings{nonta2026refusal,
  title={Refusal-Orthogonal Gated Editing for Safer Localized LLM Adaptation},
  author={Nonta, Nayeema and Rambhatla, Sirisha},
  booktitle={ICLR 2026 Third Workshop on Test-Time Updates (Main Track)},
  year={2026}
}`
  },
  {
    title: "Safe Downstream Adaptation of LLMs via Refusal-Orthogonal Gated Editing",
    authors: ["Nayeema Nonta", "Sirisha Rambhatla"],
    venue: "ICLR Workshop on Representational Alignment",
    venueFilters: ["ICLR"],
    year: "2026",
    sortYear: 2026,
    status: "Workshop",
    type: "workshop",
    statusTone: "violet",
    summary:
      "Workshop paper on downstream LLM adaptation with refusal-orthogonal gated editing.",
    tags: [
      "AI safeguard protection",
      "Refusal geometry",
      "ICLR",
      "Activation editing",
      "Efficient fine-tuning"
    ],
    links: [],
    bibtex: String.raw`@inproceedings{nonta2026safe,
  title={Safe Downstream Adaptation of LLMs via Refusal-Orthogonal Gated Editing},
  author={Nonta, Nayeema and Rambhatla, Sirisha},
  booktitle={ICLR 2026 Workshop on Representational Alignment (Re $\{$$\backslash$textasciicircum$\}$ 4-Align)},
  year={2026}
}`
  },
  {
    title: "TamperBench: A Systematic Framework to Stress-Test LLM Safety Under Fine-Tuning and Tampering",
    authors: [
      "Saad Hossain",
      "Tom Tseng",
      "Punya Syon Pandey",
      "Samanvay Vajpayee",
      "Matthew Kowal",
      "Nayeema Nonta",
      "Samuel Simko",
      "Stephen Casper",
      "Zhijing Jin",
      "Kellin Pelrine",
      "Sirisha Rambhatla"
    ],
    venue: "ICLR Workshops",
    venueFilters: ["ICLR"],
    year: "2026",
    sortYear: 2026,
    status: "Workshop",
    type: "workshop",
    statusTone: "violet",
    summary:
      "Presented across ICLR 2026 workshops on monitoring ML models under drift, agents in the wild, and recursive self-improvement.",
    tags: ["LLM safety", "Tamper resistance", "Benchmarking", "Evaluation", "KDD"],
    links: [{ label: "OpenReview", href: "https://openreview.net/forum?id=R5TNXfdPn8", type: "paper" }]
  },
  {
    title: "Random but Right: A Geometric Explanation for Efficient LLM Training",
    authors: ["Sahar Rajabi", "Nayeema Nonta", "Sirisha Rambhatla"],
    venue: "ICLR Workshop on Geometry-grounded Representation Learning and Generative Modeling",
    venueFilters: ["ICLR"],
    year: "2026",
    sortYear: 2026,
    status: "Workshop",
    type: "workshop",
    statusTone: "violet",
    summary:
      "Workshop paper connecting randomized gradient subspaces with geometric structure in efficient LLM training.",
    tags: ["LLM training", "Geometry", "Optimization", "ICLR"],
    links: [],
    bibtex: `@inproceedings{rajabi2026random,
  title={Random but Right: A Geometric Explanation for Efficient LLM Training},
  author={Rajabi, Sahar and Nonta, Nayeema and Rambhatla, Sirisha},
  booktitle={ICLR 2026 Workshop on Geometry-grounded Representation Learning and Generative Modeling},
  year={2026}
}`
  },
  {
    title: "Principled Randomized Exploration of Gradient Subspaces for Efficient LLM Training",
    authors: ["Sahar Rajabi", "Nayeema Nonta", "Sirisha Rambhatla"],
    venue: "ICLR Workshop on Deep Generative Model in Machine Learning",
    venueFilters: ["ICLR"],
    year: "2026",
    sortYear: 2026,
    status: "Workshop",
    type: "workshop",
    statusTone: "violet",
    summary:
      "Workshop paper on randomized exploration of gradient subspaces for efficient LLM training.",
    tags: ["Gradient subspaces", "Efficient training", "Generative models", "ICLR"],
    links: [],
    bibtex: `@inproceedings{rajabi2026principled,
  title={Principled Randomized Exploration of Gradient Subspaces for Efficient LLM Training},
  author={Rajabi, Sahar and Nonta, Nayeema and Rambhatla, Sirisha},
  booktitle={ICLR 2026 2nd Workshop on Deep Generative Model in Machine Learning: Theory, Principle and Efficacy},
  year={2026}
}`
  },
  {
    title: "Randomized Gradient Subspaces for Efficient Large Language Model Training",
    authors: ["Sahar Rajabi", "Nayeema Nonta", "Samanvay Vajpayee", "Sirisha Rambhatla"],
    venue: "arXiv",
    venueFilters: ["arXiv"],
    year: "2025",
    sortYear: 2025,
    status: "Preprint",
    type: "preprint",
    statusTone: "amber",
    summary:
      "An analysis of gradient-space dynamics with randomized algorithms for memory-efficient LLM pretraining.",
    tags: ["LLM training", "Memory efficiency", "Randomized algorithms", "Optimization"],
    links: [{ label: "Paper", href: "https://arxiv.org/abs/2510.01878", type: "paper" }],
    includeInCv: false,
    bibtex: `@article{rajabi2025randomized,
  title={Randomized Gradient Subspaces for Efficient Large Language Model Training},
  author={Rajabi, Sahar and Nonta, Nayeema and Vajpayee, Samanvay and Rambhatla, Sirisha},
  journal={arXiv preprint arXiv:2510.01878},
  year={2025}
}`
  }
];
