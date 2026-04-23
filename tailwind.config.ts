import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0F2440",        // Navy Blue from logo
        "primary-hover": "#1A3A5A",
        secondary: "#C8A96E",      // Gold from logo
        "secondary-hover": "#B08D4D",
        "site-bg": "#111111",        // Main background
        "site-card": "#1A1A1A",      // Nav/Card background
        "muted-text": "#9CA3AF",     // Grey text
        "muted-border": "#374151",   // Subtle lines

      },
      fontFamily: {
        sans: ["var(--font-roboto)", "sans-serif"],
        display: ["var(--font-poppins)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
