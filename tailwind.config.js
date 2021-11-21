const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./app/**/*.tsx", "./app/**/*.jsx", "./app/**/*.js", "./app/**/*.ts"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
      },
      outline: {
        current: ["2px dotted currentColor", "0.125rem"],
      },
    },
  },
  variants: {},
  plugins: [],
};
