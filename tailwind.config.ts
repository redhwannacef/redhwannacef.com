import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],

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
  plugins: [],
} satisfies Config;
