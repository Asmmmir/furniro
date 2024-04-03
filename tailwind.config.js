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
        title: '#333333',
        description: "#898989"
      },
      gridTemplateColumns: {
          galerry: 'repeat(auto-fill, minmax(min-content, 1fr))',
          footer: 'repeat(auto-fill, minmax(300px, 1fr))'
      },

      backgroundImage: {
        'header-hero': "url('/images/header-bg.jpg)"
      }
    },
  },
  plugins: [],
}