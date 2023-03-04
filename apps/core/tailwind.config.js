const path = require("path");
const { createGlobPatternsForDependencies } = require("@nrwl/react/tailwind");
const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: [
    path.join(
      __dirname,
      "{src,pages,components}/**/*!(*.stories|*.spec).{ts,tsx,html}"
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#FFD7B8",
          100: "#FFCBA3",
          200: "#FFB47A",
          300: "#FF9D52",
          400: "#FF8629",
          500: "#FF6F00",
          600: "#C75700",
          700: "#8F3E00",
          800: "#572600",
          900: "#1F0D00",
        },
        secondary: "#425066",
        grey: "#616161",
      },
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
