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
        // whitePale: "#fffcf9",
        whitePale: "#fffdfc",
        // whitePale: "#fffcf9",
        accent: "#abcdef",
      },
      fontFamily: {
        headline: ["Beautiful-Light", "serif"],
        "headline-italic": ["Beautiful-Light-Italic", "serif"],
        "body-light": ["Metallophile-Light", "sans-serif"],
        "body-light-italic": ["Metallophile-Light-Italic", "sans-serif"],
        "body-medium": ["Metallophile-Medium", "sans-serif"],
        "body-medium-italic": ["Metallophile-Medium-Italic", "sans-serif"],
        button: ["SpaceMono-Regular", "monospace"],
        "button-italic": ["SpaceMono-Regular-Italic", "monospace"],
        "button-bold": ["SpaceMono-Bold", "monospace"],
        "button-bold-italic": ["SpaceMono-Bold-Italic", "monospace"],
      },
      keyframes: {
        slideDown: {
          "0%": {
            transform: "translateY(-10px)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(0)",
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [],
};
