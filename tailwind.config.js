/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        laravel: '#ff2d20',
        vue: '#41b883',
        tailwind: '#38bdf8'
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}

