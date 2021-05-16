module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
   darkMode: 'class', // or 'media' or 'class'
   theme: {
     extend: {
      colors: {
        gray: {
          700: "#30303F",
          800: "#232332",
          900: "#161625"
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
     },
   },
   variants: {
     extend: {
      textColor: ['dark'],
     },
   },
   plugins: [],
 }