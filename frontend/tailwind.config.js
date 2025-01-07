/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    colors:{
      ...colors,
      blue: '#0b5cff'

    },
    extend: {},
  },
  plugins: [],
}

