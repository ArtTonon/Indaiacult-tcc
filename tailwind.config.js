/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,tsx,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        cardDefault: "url('/assets/UserBanner.png')",
        whiteModeBg: "url('/assets/lightBg.svg')",
        darkModeBg: "url('/assets/darkBg.svg')",
      },
      fontFamily: {
        montserrat: ["'Montserrat'", "sans-serif"],
      },
      colors: {
        main: "#F87060",
        lightblue: "#3E8989",
        darkblue: "#102542",
        diffBlack: "#121212",
        beje: "#b3a394",
        yellow: "#e3d985"
      },
    },
  },
  plugins: [],
};
