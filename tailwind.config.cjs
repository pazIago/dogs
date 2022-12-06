/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["helvetica", "arial", "sans-serif"],
        secondary: ["spectral", "georgia"],
      },
    },
  },
  plugins: [],
};
