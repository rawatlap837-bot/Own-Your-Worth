/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#241531',        // near-black plum, primary dark ground
        plum: {
          DEFAULT: '#3B2354',
          deep: '#2A1740',
          soft: '#4E2E6E',
        },
        amethyst: {
          DEFAULT: '#7A4CA0',
          light: '#9B6DC9',
          pale: '#C9AEE3',
        },
        gold: {
          DEFAULT: '#D9A441',
          soft: '#EAC787',
          deep: '#B9812A',
        },
        cream: '#FBF7F2',
        lilac: '#F1E9F7',
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Work Sans"', 'sans-serif'],
      },
      maxWidth: {
        prose: '38rem',
      },
      keyframes: {
        rise: {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        drift: {
          '0%, 100%': { transform: 'translate3d(0,0,0)' },
          '50%': { transform: 'translate3d(0,-16px,0)' },
        },
      },
      animation: {
        rise: 'rise 0.9s cubic-bezier(0.16,1,0.3,1) both',
        drift: 'drift 9s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
