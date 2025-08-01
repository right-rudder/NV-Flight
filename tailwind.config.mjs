import defaultTheme from "tailwindcss/defaultTheme";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans Variable", ...defaultTheme.fontFamily.sans],
        title: ["Kanit", ...defaultTheme.fontFamily.sans],
        stock: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
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
