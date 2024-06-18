import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    extend: {
      colors: {
        dark: {
          1: "#161925",
          2: "#1C1F2E",
          3: "#252A41",
        },
        blue: {
          1: "#0E78F9",
        },
        text: {
          1: "#ffffff",
          2: "#C9DDFF",
          3: "#ECF0FF",
        },
        orange: {
          1: "#FF742E",
        },
        purple: {
          1: "#830EF9",
        },
        yellow: {
          1: "#830EF9",
        },
      },

      backgroundImage: {
        hero: "url('/images/hero-background.png')",
      },

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
