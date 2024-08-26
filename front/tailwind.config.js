/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: { sans: ["Plus Jakarta sans", "system-ui", "sans-serif"] },
    },
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1024",
    },
    colors: {
      blue: {
        100: "#A8A4FF",
        200: "#635FC7",
      },
      gray: {
        100: "#F4F7FD",
        200: "#E4EBFA",
        300: "#828FA3",
        400: "#3E3F4E",
        500: "#2B2C37",
        600: "#20212C",
        700: "#000112",
      },
      red: {
        100: "#FF9898",
        200: "#EA5555",
      },
      white: "#fff",
    },
  },
  plugins: [],
};
