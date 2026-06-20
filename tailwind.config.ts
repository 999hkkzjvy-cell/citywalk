import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#f7f1e3",
        "cream-dark": "#e8ddcc",
        brick: "#b5343a",
        "brick-light": "#d4454a",
        gold: "#c4a265",
        "gold-light": "#dcc89b",
        "dark-green": "#2d5016",
        slate: "#3a3a3a",
        ink: "#1a1a1a",
        paper: "#faf7f0",
        "paper-dark": "#efe8d8",
        sepia: "#e6d5b8",
      },
      fontFamily: {
        serif: [
          "Noto Serif SC",
          "serif",
        ],
        sans: [
          "Noto Sans SC",
          "-apple-system",
          "BlinkMacSystemFont",
          "PingFang SC",
          "Microsoft YaHei",
          "sans-serif",
        ],
      },
      boxShadow: {
        card: "0 4px 24px rgba(0,0,0,0.12)",
        "card-hover": "0 8px 40px rgba(0,0,0,0.18)",
        "brick": "0 2px 12px rgba(181,52,58,0.3)",
        "green": "0 2px 12px rgba(45,80,22,0.3)",
      },
      animation: {
        float: "float 2s ease-in-out infinite",
        "stamp-in": "stampIn 0.5s ease forwards",
        "hero-glow": "heroGlow 8s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(8px)" },
        },
        stampIn: {
          "0%": { transform: "scale(0) rotate(-20deg)", opacity: "0" },
          "60%": { transform: "scale(1.2) rotate(5deg)" },
          "100%": { transform: "scale(1) rotate(0)", opacity: "1" },
        },
        heroGlow: {
          "0%": { opacity: "0.7" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
