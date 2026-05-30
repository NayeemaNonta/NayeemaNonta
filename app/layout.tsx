import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

import "./globals.css";

const siteUrl = "https://nayeemanonta.github.io/NayeemaNonta/";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Nayeema Nonta | LLM Systems Researcher",
    template: "%s | Nayeema Nonta"
  },
  description:
    "Personal academic website for Nayeema Nonta, an LLM systems researcher focused on post-training, efficient adaptation, model reliability, and safety.",
  keywords: [
    "Nayeema Nonta",
    "machine learning",
    "LLM systems",
    "post-training",
    "LLM adaptation",
    "AI safety",
    "LLM safety",
    "efficient training",
    "University of Waterloo"
  ],
  authors: [{ name: "Nayeema Nonta" }],
  icons: {
    icon: `${basePath}/favicon.ico`
  },
  openGraph: {
    title: "Nayeema Nonta | LLM Systems Researcher",
    description:
      "Research, publications, projects, news, media, and CV for Nayeema Nonta.",
    url: siteUrl,
    siteName: "Nayeema Nonta",
    images: [
      {
        url: `${siteUrl}images/NN.png`,
        width: 512,
        height: 512,
        alt: "Nayeema Nonta"
      }
    ],
    type: "website"
  }
};

export const viewport: Viewport = {
  themeColor: "#f7f8f8",
  colorScheme: "light"
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
