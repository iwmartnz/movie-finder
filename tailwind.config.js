/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Outfit Variable"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#2b2b2b",

          secondary: "#d1d1d1",

          accent: "#ff7124",

          neutral: "#fff",

          "base-100": "#141414",

          info: "#ffffff",

          success: "#009c7e",

          warning: "#ff6f00",

          error: "#f10035",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
