import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B1B3D",
          dark: "#07122A",
          light: "#132752",
          card: "#183060",
          muted: "#4A5B7E"
        },
        gold: {
          DEFAULT: "#C9962B",
          light: "#E4B94F",
          dark: "#8F6510",
          text: "#8F6510", // WCAG AA 5.0:1 on white
          surface: "#FDFBF7",
          border: "#E9D8B4"
        },
        surface: {
          DEFAULT: "#FFFFFF",
          muted: "#F4F6FA",
          card: "#FFFFFF",
          dark: "#0B1B3D"
        },
        whatsapp: {
          DEFAULT: "#25D366",
          hover: "#1EBE5D",
          light: "rgba(37, 211, 102, 0.12)"
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        heading: ["var(--font-heading)", "'Barlow Condensed'", "'Oswald'", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"]
      },
      boxShadow: {
        soft: "0 2px 12px -2px rgba(11, 27, 61, 0.06), 0 4px 8px -3px rgba(11, 27, 61, 0.04)",
        lift: "0 14px 28px -6px rgba(11, 27, 61, 0.11), 0 8px 12px -4px rgba(11, 27, 61, 0.06)",
        goldGlow: "0 4px 20px rgba(201, 150, 43, 0.22)",
        whatsappGlow: "0 4px 20px rgba(37, 211, 102, 0.35)"
      }
    }
  },
  plugins: []
};

export default config;
