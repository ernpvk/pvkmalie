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
        metallophile: ["Metallophile", "system-ui", "sans-serif"],
        besley: ["Besley-Regular", "system-ui", "sans-serif"],
        "besley-italic": ["Besley-Regular-Italic", "system-ui", "sans-serif"],
        "besley-medium": ["Besley-Medium", "system-ui", "sans-serif"],
        "besley-medium-italic": ["Besley-Medium-Italic", "system-ui", "sans-serif"],
        "besley-bold": ["Besley-Bold", "system-ui", "sans-serif"],
        "besley-bold-italic": ["Besley-Bold-Italic", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
