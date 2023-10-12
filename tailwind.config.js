/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'heebo': 'Heebo'
      },
      colors: {
        primary: '#21243D',
        display: '#142850',
        brand: {
          gray: '#EDF7FA',
          red: '#FF6464',
          blue: '#00A8CC',
          light: '#8695A4'
        }
      }
    },
  },
  plugins: [],
}

