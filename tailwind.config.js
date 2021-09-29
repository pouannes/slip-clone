const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.blueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      blue: colors.blue,
    },
    extend: {
      colors: {
        accent: "#0991FF",
        bgAccent: "#0991FF",
        accentDark: "#154770",
        accentVeryDark: "#0B263C",
        accentLight: "#28C2FF",
        // really gotta work on better naming haha
        accentDarkLight: "#1A5789",
        gray: {
          790: "#273245",
          950: "#0A101E",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
