/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'deep-black': '#0A0A0A',
        'champagne': '#D6B47C',
        'nude-rose': '#E7D7D0',
        'ice-white': '#F8F7F5',
      },
      fontFamily: {
        'editorial': ['Playfair Display', 'Bodoni Moda', 'serif'],
        'body': ['Inter', 'Satoshi', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1.5s ease-out',
        'slide-up': 'slideUp 1s ease-out',
        'blur-reveal': 'blurReveal 2s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blurReveal: {
          '0%': { opacity: '0', filter: 'blur(20px)' },
          '100%': { opacity: '1', filter: 'blur(0)' },
        },
      },
    },
  },
  plugins: [],
}
