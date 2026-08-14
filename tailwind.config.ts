import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#050507",
        ink: "#0a0a0d",
        surface: "#0d0e12",
        line: "rgba(255,255,255,0.08)",
        "line-strong": "rgba(255,255,255,0.14)",
        star: "#f5f4f8",
        mist: "#9a9aa8",
        ash: "#5c5c6b",
        violet: "#8b6bff",
        "violet-dim": "#6d54c9",
        cyan: "#6de0ff",
        blue: "#5b7fff",
      },
      fontFamily: {
        display: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        body: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        widest2: "0.24em",
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
        pulse2: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        drift: "drift 6s ease-in-out infinite",
        pulse2: "pulse2 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
