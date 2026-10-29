/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        pokeRed: '#EE1515',
        pokeDarkRed: '#CC0000',
        pokeBlue: '#3B4CCA',
        pokeYellow: '#FFDE00',
        pokeGold: '#B3A125',
      }
    },
  },
  plugins: [],
}
