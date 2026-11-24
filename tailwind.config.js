/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#FDEBEC',
          100: '#FBD4D7',
          200: '#F6A9AF',
          300: '#F07E88',
          400: '#E95B68',
          500: '#DD3D4E',
          600: '#C42F3F',
          700: '#A22432',
          800: '#7E1B26',
          900: '#5A131B',
          DEFAULT: '#DD3D4E',
        },
        charcoal: {
          50: '#F5F5F5',
          100: '#E8E8EA',
          200: '#D2D2D5',
          300: '#A9A9AE',
          400: '#808086',
          500: '#5C5C61',
          600: '#434347',
          700: '#333337',
          800: '#28282B',
          900: '#202124',
          DEFAULT: '#202124',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '0.35' },
          '50%': { opacity: '0.7' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out both',
        float: 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
