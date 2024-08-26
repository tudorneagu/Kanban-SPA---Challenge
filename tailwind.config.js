/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { sans: ["Plus Jakarta sans", "system-ui", "sans-serif"] },
    },
    colors: {
      "dark-blue": "#635FC7",
      "light-blue": "#A8A4FF",
      "dark-black": "#000112",
      "light-black": "#20212C",
      "dark-gray": "#2B2C37",
      "dark-02-gray": "#3E3F4E",
      "mid-gray": "#828FA3",
      "light-gray": "#E4EBFA",
      "light-02-gray": "#F4F7FD",
      "cherry-red": "#EA5555",
      "light-red": "#FF9898",
    },
  },
  plugins: [],
};
