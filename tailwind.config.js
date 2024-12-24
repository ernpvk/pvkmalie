// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#f47453",
          2: "#88ae48",
        },
        secondary: {
          DEFAULT: "#f1d4c7",
          neon: "#ff7174",
          yellow: "#f7e68e",
        },
        pale: "#f8f7e7",
        whitePale: "#fffdfc",
        // whitePale: "#fffcf9",
        accent: "#abcdef",
      },
      fontFamily: {
        headline: ["ClearFace-Regular", "serif"],
        "headline-italic": ["ClearFace-Regular-Italic", "serif"],
        "body-light": ["Metallophile-Light", "sans-serif"],
        "body-light-italic": ["Metallophile-Light-Italic", "sans-serif"],
        "body-medium": ["Metallophile-Medium", "sans-serif"],
        "body-medium-italic": ["Metallophile-Medium-Italic", "sans-serif"],
        button: ["SpaceMono-Regular", "monospace"],
        "button-italic": ["SpaceMono-Regular-Italic", "monospace"],
        "button-bold": ["SpaceMono-Bold", "monospace"],
        "button-bold-italic": ["SpaceMono-Bold-Italic", "monospace"],
      },
    },
  },
  plugins: [],
};
