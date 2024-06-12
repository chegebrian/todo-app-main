/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./script.js"],
  theme: {
    extend: {
      backgroundImage: {
        'bg-mobile-dark': "url('./images/bg-mobile-dark.jpg')",
        'bg-mobile-light': "url('./images/bg-mobile-light.jpg')",
        'bg-desktop-light': "url('./images/bg-desktop-light.jpg')",
        'bg-desktop-dark': "url('./images/bg-desktop-dark.jpg')",
      }
    },
  },
  plugins: [],
}

