/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'flag-red': '#DA251D',
        'flag-yellow': '#FFCD00',
      },
      boxShadow: {
        soft: '0 12px 40px rgba(0,0,0,0.25)',
      },
    },
  },
  plugins: [],
}

