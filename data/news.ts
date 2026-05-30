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
