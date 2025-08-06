import defaultTheme from "tailwindcss/defaultTheme";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        heading: ["Exo 2", ...defaultTheme.fontFamily.sans],
        display: ["Orbitron", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        muted: {
          50: "#fafafa",
          100: "#f4f4f5",
          200: "#e4e4e7",
          300: "#d4d4d8",
          400: "#a1a1aa",
          500: "#71717a",
          600: "#52525b",
          700: "#3f3f46",
          800: "#27272a",
          900: "#18181b",
          950: "#09090b",
        },
        primary: {
          50: "#f2faeb",
          100: "#dff4d3",
          200: "#c2eaac",
          300: "#9dda7c",
          400: "#7ac952",
          500: "#5bae34",
          600: "#4b992a",
          700: "#366a21",
          800: "#2d551f",
          900: "#29491e",
          950: "#12270c",
        },
        accent: {
          50: "#fffbe7",
          100: "#fff5c2",
          200: "#ffe87a",
          300: "#ffe04d",
          400: "#ffd21a",
          500: "#e8b800",
          600: "#d4a200",
          700: "#a78300",
          800: "#8d6c00",
          900: "#7c5c00",
          950: "#3f2e00",
        },
      },
      minHeight: {
        "1/2": "50vh",
        "2/3": "66vh",
        "3/4": "75vh",
      },
      height: {
        "1/2": "50vh",
        "3/4": "75vh",
      },
      keyframes: {
        zoom: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.2)" },
        },
        "fade-from-left": {
          "0%": { opacity: 0, transform: "translateX(-15px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        "fade-from-right": {
          "0%": { opacity: 0, transform: "translateX(15px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        "fade-from-top": {
          "0%": { opacity: 0, transform: "translateY(-15px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "fade-from-bottom": {
          "0%": { opacity: 0, transform: "translateY(15px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-left": "fade-from-left 0.9s ease-out",
        "fade-right": "fade-from-right 0.9s ease-out",
        "fade-top": "fade-from-top 0.9s ease-out",
        "fade-bottom": "fade-from-bottom 0.9s ease-out",
        "slow-zoom": "zoom 45s alternate infinite ease-in-out",
        "mid-zoom": "zoom 18s alternate infinite ease-in-out",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
