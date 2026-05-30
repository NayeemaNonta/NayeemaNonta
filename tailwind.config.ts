import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        paper: "#f7f8f8",
        ink: "#14213d",
        muted: "#5f7083",
        quiet: "#8896a6",
        line: "#dfe5ea",
        card: "#ffffff",
        accent: "#287c78",
        moss: "#6f7d5c",
        clay: "#b66f54",
        lavender: "#7b7397"
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif"
        ],
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"]
      },
      boxShadow: {
        card: "0 18px 50px rgba(20, 33, 61, 0.07)",
        lift: "0 24px 60px rgba(20, 33, 61, 0.11)"
      }
    }
  },
  plugins: []
};

export default config;
