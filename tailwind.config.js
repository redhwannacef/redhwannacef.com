const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./app/**/*.tsx", "./app/**/*.jsx", "./app/**/*.js", "./app/**/*.ts"],
  darkMode: false,
  theme: {
    extend: {
      textColor: {
        primary: "var(--text-primary)",
        colorPrimary: "var(--color-primary)",
      },
      backgroundColor: {
        primary: "var(--bg-primary)",
      },
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
