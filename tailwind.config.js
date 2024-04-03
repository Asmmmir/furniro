/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", 'sans-serif'],
        montserrat: ["Montserrat", 'sans-serif']
        
      },
      colors: {
        gold: '#B88E2F',
        title: '#333333'
      },

      backgroundImage: {
        'header-hero': "url('/images/header-bg.jpg)"
      }
    },
  },
  plugins: [],
}