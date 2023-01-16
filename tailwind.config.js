/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        fadeInTop: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInBottom: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleX: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
        highlight: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.025)' },
        },
      },
      animation: {
        fadeInTop: 'fadeInTop 0.6s 0.3s forwards',
        fadeInBottom: 'fadeInBottom 0.6s 0.3s forwards',
        scaleX: 'scaleX 0.6s 0.2s forwards',
        highlight: 'highlight 0.6s infinite alternate',
      },
    },
  },
  plugins: [],
};
