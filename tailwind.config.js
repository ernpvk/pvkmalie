// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#163a2e",
          light: "##60a596",
        },
        secondary: {
          DEFAULT: "#f1d4c7",
          neon: "#ff7174",
          yellow: "#ff7174",
        },
        backgroundOne: "#f8f7f3",
        backgroundTwo: "#fffcf9",
        accent: "#abcdef",
      },
      fontFamily: {
        metallophile: ["Metallophile", "system-ui", "sans-serif"],
        beautiful: ["Beautiful-Regular", "system-ui", "sans-serif"],
        "beautiful-italic": ["Beautiful-Regular-Italic", "system-ui", "sans-serif"],
        "beautiful-bold": ["Beautiful-Bold", "system-ui", "sans-serif"],
        "beautiful-bold-italic": ["Beautiful-Bold-Italic", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
