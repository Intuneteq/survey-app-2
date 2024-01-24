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
      },

      screens: {
        xl: "1300px",
        // => @media (min-width: 1300px) { ... }
      },
      // fontSize: {},
      // colors: {},
    },
  },
  plugins: [],
};
