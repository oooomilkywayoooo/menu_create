/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    fontFamily: {
      Kiwi: ['Kiwi Maru', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')  // ←これも追加！
  ],
}

