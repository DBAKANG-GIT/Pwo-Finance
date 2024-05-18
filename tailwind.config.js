/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT');

export default withMT({
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        swampGreen: '#606C38',
        black: '#343434',
        lightGrey: '#595959',
        lightPink: '#f3e6de',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      lineHeight: {
        174: '1.74',
      },
    },
  },
  plugins: [],
});
