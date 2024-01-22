/** @type {import('tailwindcss').Config} */

import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [defaultTheme.fontFamily.sans],
      },
      // fontSize: {},
      // colors: {},
    },
  },
  plugins: [],
};
