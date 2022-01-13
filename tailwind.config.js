const colors = require('tailwindcss/colors')
module.exports = {
  content: ['./pages/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: colors.green,
        secondary: colors.red
      }
    }
  },
  plugins: []
}
