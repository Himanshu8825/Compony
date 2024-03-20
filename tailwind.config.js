/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#8000CF",
      },
      fontFamily: {
        Lato: ["Lato", "sans-serif"],
        mountain: ["Mountains of Christmas", "cursive"],
      },
    },
  },
  plugins: [],
};
