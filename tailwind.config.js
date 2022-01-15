const colors = require('tailwindcss/colors')
module.exports = {
  content: ['./pages/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: colors.green,
        secondary: colors.red,
        dark: colors.gray,
        light: colors.gray
      }
    }
  },
  plugins: []
}
