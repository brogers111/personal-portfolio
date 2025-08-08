/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bluffolk: ["bluffolk", "sans-serif"],
      },
    },
  },
  plugins: [],
};
