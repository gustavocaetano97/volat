/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
        'syncopate': ['Syncopate', 'sans-serif'],
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'opacity': '0',
            'transform': 'translateX(-50%)'
          },
          '50%': {
            'opacity': '1',
            'transform': 'translateX(0)'
          },
        },
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(to right, #6b2c84, #98356b, #ba3e53, #d84b3d, #ec6429)',
        'brand-gradient-hover': 'linear-gradient(to right, #6b2c84, #98356b, #ba3e53, #d84b3d, #ec6429)',
      },
      colors: {
        brand: {
          purple: '#6b2c84',
          'purple-mid': '#98356b',
          'red-dark': '#ba3e53',
          'red-light': '#d84b3d',
          orange: '#ec6429',
        },
      },
    },
  },
  plugins: [],
}