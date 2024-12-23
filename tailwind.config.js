// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#163a2e",
          light: "#60a596",
        },
        secondary: {
          DEFAULT: "#f1d4c7",
          neon: "#ff7174",
          yellow: "#f7e68e",
        },
        pale: "#f8f7e7",
        whitePale: "#fffcf9",
        accent: "#abcdef",
      },
      fontFamily: {
        "besley-regular": ["Besley-Regular", "serif"],
        "besley-regular-italic": ["Besley-Regular-Italic", "serif"],
        "besley-medium": ["Besley-Medium", "serif"],
        "besley-medium-italic": ["Besley-Medium-Italic", "serif"],
        "besley-bold": ["Besley-Bold", "serif"],
        "besley-bold-italic": ["Besley-Bold-Italic", "serif"],
        "metallophile-light": ["Metallophile-Light", "sans-serif"],
        "metallophile-light-italic": ["Metallophile-Light-Italic", "sans-serif"],
        "metallophile-medium": ["Metallophile-Medium", "sans-serif"],
        "metallophile-medium-italic": ["Metallophile-Medium-Italic", "sans-serif"],
        "space-mono-regular": ["SpaceMono-Regular", "monospace"],
        "space-mono-regular-italic": ["SpaceMono-Regular-Italic", "monospace"],
        "space-mono-bold": ["SpaceMono-Bold", "monospace"],
        "space-mono-bold-italic": ["SpaceMono-Bold-Italic", "monospace"],
      },
    },
  },
  plugins: [],
};
