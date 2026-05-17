import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark Mode
        dark: {
          bg: "#0B1020",
          surface: "#151A2D",
          text: "#F5F3FF",
          secondary: "#A78BFA",
          accent: "#8B5CF6",
        },
        // Light Mode
        light: {
          bg: "#FAF5FF",
          surface: "#FFFFFF",
          text: "#1E1B4B",
          secondary: "#6D28D9",
          accent: "#7C3AED",
        },
      },
      fontFamily: {
        display: ["'Playfair Display'", "Georgia", "serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'Fira Code'", "monospace"],
      },
      backgroundImage: {
        "gradient-dark": "linear-gradient(135deg, #8B5CF6, #06B6D4)",
        "gradient-light": "linear-gradient(135deg, #A855F7, #06B6D4)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      boxShadow: {
        glow: "0 0 30px rgba(139, 92, 246, 0.4)",
        "glow-cyan": "0 0 30px rgba(6, 182, 212, 0.4)",
        "glow-sm": "0 0 15px rgba(139, 92, 246, 0.3)",
      },
    },
  },
  plugins: [],
};
export default config;
