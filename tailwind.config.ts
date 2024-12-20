import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#DF2389",
        secondary: "#5C027F",
        accent1: "#04065D",
        accent2: "#EF0B20",
        dark1: "#0C0D10",
        dark2: "#333333",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [typography],
} satisfies Config;
