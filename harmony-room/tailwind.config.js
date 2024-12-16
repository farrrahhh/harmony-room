/** @type {import('tailwindcss').Config} */

const config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
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

      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      typography: {
        DEFAULT: {
          css: {
            h1: {
              //64 px
              fontSize: "4rem",
              fontFamily: "Poppins",
              fontWeight: "700",
            },
            h2: {
              //48 px
              fontSize: "3rem",
              fontFamily: "Poppins",
              fontWeight: "700",
            },
            h3: {
              //32px
              fontSize: "2rem",
              fontFamily: "Poppins",
              fontWeight: "600",
            },
            sb1: {
              //24px
              fontSize: "1.5rem",
              fontFamily: "Poppins",
              fontWeight: "600",
            },
            sb2: {
              //16px
              fontSize: "1rem",
              fontFamily: "Poppins",
              fontWeight: "600",
            },
            b1: {
              //16px
              fontSize: "1rem",
              fontFamily: "Poppins",
              fontWeight: "500",
            },
            b2: {
              //14px
              fontSize: "0.875rem",
              fontFamily: "Poppins",
              fontWeight: "400",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
