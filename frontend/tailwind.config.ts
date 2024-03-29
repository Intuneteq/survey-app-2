/** @type {import('tailwindcss').Config} */

import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["MuseoModerno", defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#239D60",
        secondary: "#FFF5C1",
        white: "#FFF",
        grey: "#BDBBBB",
        black: "#000"
      },

      screens: {
        xl: "1300px",
        // => @media (min-width: 1300px) { ... }
      },
      backgroundImage: {
        published: "url('/published.png')",
      },
      boxShadow: {
        'topshad': '0px -20px 5.4px -2px #239D60;',
},
      // fontSize: {},
    },
  },
  plugins: [],
};
