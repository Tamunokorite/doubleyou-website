/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "*.html"
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      }
    },
  },
  plugins: [
    require("tailwindcss"),
    require("autoprefixer")
  ]
}

