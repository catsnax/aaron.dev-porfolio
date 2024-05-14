/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'amaranth' : ["Amaranth"],
        'rubik' : ["Rubik"]
      },
      animation: {
        'fade-in': 'fadeIn 500ms ease-in-out',
        'fade-out': 'fadeOut 500ms ease-in-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
      }

    },
  },
  plugins: [],
}

