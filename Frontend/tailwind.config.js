/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        background:"#e8e8e8",
        primary:"#947f57",
        secondary:'#3d3d3d'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}