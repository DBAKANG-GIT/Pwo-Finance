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
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
});
