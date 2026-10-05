export type NewsItem = {
  title: string;
  date: string;
  tag: string;
  description: string;
  href: string;
  image: string;
  imageAlt: string;
};

export const newsItems: NewsItem[] = [
  {
    title: "Major security weaknesses found in leading open AI models",
    date: "Aug 2026",
    tag: "Media",
    description:
      "Featured in Waterloo News for our TamperBench work, which systematically stress-tested 21 leading open-weight language models and found that every model tested could be modified to bypass its safety protections.",
    href: "https://uwaterloo.ca/news/media/major-security-weaknesses-found-leading-open-ai-models",
    image: "/images/tamperbench_news.jpg",
    imageAlt:
      "A person typing at a keyboard with visual representations of artificial intelligence and cybersecurity warnings"
  },
  {
    title: "Making powerful AI more accessible to everyone",
    date: "Dec 2025",
    tag: "Media",
    description:
      "Featured in UWaterloo News for our work on SubTrack++, an advanced training technique that accelerates large language model pre-training by up to 65% while maintaining state-of-the-art accuracy - helping democratize AI by reducing computational costs.",
    href: "https://uwaterloo.ca/news/media/making-powerful-ai-more-accessible-everyone",
    image: "/images/subtrack_news.png",
    imageAlt: "Making powerful AI more accessible to everyone"
  }
];
