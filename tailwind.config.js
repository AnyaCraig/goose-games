/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lightGrey': '#f5f0f0',
        'darkGrey': '#dbd7d7',
        'offWhite': '#FEFDFD',
        'black': '#343434',
        'blue': '#1B63CD',
        'amber': '#ffd470',
        'lilac': '#F4E1FA',
        'aqua': '#C6F5F2',
        'jade': '#047a5f',
      },
      fontFamily: {
        'gabriela': ['Gabriela', 'serif'],
        'tajawal': ['Tajawal', 'sans-serif'],
      },
      spacing: {
        tiniest: '1px',
        tiny: '2px',
        xxxs: '4px',
        xxs: '6px',
        xs: '15px',
        sm: '25px',
        md: '35px',
        lg: '50px',
        btnTop: '12px',
        btnBtm: '6px',
        pillTop: '5px',
        pillIconWidth: '18px',
        pillIconTopMargin: '-6px',
        gameAvatarWidth: '150px',
      }
    },
  },
  plugins: [
  ],
}
