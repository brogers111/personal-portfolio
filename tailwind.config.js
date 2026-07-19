/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bluffolk: ["bluffolk", "sans-serif"],
        dongle: ["dongle", "sans-serif"],
      },
      colors: {
        accent: {
          light: "#e8635a",
          DEFAULT: "#c23b32",
          dark: "#9c2e27",
        },
      },
    },
  },
  plugins: [],
};
