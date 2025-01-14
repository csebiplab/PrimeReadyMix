/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      screens: {
        xs: "280px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
        "3xl": "1536px",
        "4xl": "1736px",
        "5xl": "1920px",
      },
      maxWidth: {
        "screen-5xl": "1920px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        secondary: {
          DEFAULT: "#f9960d",
          50: "#fffaeb",
          100: "#fff1c6",
          200: "#ffe188",
          300: "#ffcc4a",
          400: "#ffb620",
          500: "#f9960d",
          600: "#dc6d03",
          700: "#b74b06",
          800: "#94390c",
          900: "#7a300d",
          950: "#461702",
        },
        primary: {
          DEFAULT: "#9c7066",
          50: "#faf7f6",
          100: "#f4edec",
          200: "#ecdfdc",
          300: "#ddc8c4",
          400: "#c9a7a0",
          500: "#b38980",
          600: "#9c7066",
          700: "#825b53",
          800: "#6d4e47",
          900: "#5d443f",
          950: "#30221f",
        },
        dark: {
          DEFAULT: "#33475B",
          50: "#89A3BD",
          100: "#7C99B5",
          200: "#6284A7",
          300: "#50708F",
          400: "#425B75",
          500: "#33475B",
          600: "#1F2B37",
          700: "#0B0F13",
          800: "#000000",
          900: "#000000",
          950: "#000000",
        },
        buttonColor: "#FF6448",
        pageBg: "#F5F8FA",

        "gray-1": "var(--gray-1)",
        "gray-2": "var(--gray-2)",
        "gray-3": "var(--gray-3)",
        background: "var(--background-color)",
        foreground: "var(--foreground)",

        tremor: {
          background: {
            DEFAULT: "var(--background-color)",
          },
          border: {
            DEFAULT: "var(--gray-2)",
          },
          ring: {
            DEFAULT: "var(--gray-2)",
          },
          content: {
            subtle: "var(--gray-2)",
            DEFAULT: "var(--gray-1)",
            emphasis: "var(--foreground)",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
});
