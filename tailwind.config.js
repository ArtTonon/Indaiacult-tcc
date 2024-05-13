/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,tsx,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        landingContainer: "url('/assets/landingContainerImage.jpg')",
      },
      fontFamily: {
        montserrat: ["'Montserrat'", "sans-serif"],
      },
      colors: {
        main: "#F87060",
        lightblue: "#3E8989",
        darkblue: "#102542",
        diffBlack: "#121212",
        Solid: "#FCF5E5",
        highlightDark: "#212121",
        highlight: "#E5E4E2",
      },
    },
  },
  plugins: [],
};
