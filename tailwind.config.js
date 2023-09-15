/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/components/*.vue",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
       'fam1' : "Montserrat",
       'fam2' : "Rye",
       'fam3' : "Pinyon Script",
       'fam4' : "Lekton",
      }
    },
  },
  plugins: [],
}