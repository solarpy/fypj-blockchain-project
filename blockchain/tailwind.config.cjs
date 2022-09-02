/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ["Open Sans", "sans-serif"],
      body: ["Open Sans", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
      mf: "990px"
    },
    keyframes: {
      "slide-in": {
        "0%": {
          "-webkit-transform": "translateX(120%)",
          transform: "translateX(120%)",
        },
        "100%": {
          "-webkit-transform": "translateX(0%)",
          transform: "translateX(0%)",
        },
      },
    },
    animation: {
      "slide-in": "slide-in 0.5s ease-out",
    },
  },
  variants: {
  extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
  };