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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#FE7028", // Vibrant orange
          hover: "#E66C37",
          light: "#FFF0E8",
        },
        dark: {
          DEFAULT: "#000000",
          secondary: "#111111",
          card: "#1E293B",
        },
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
