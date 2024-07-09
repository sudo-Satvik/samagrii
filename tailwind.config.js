/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:{
          400: "#FFB64A",
          500: "#FF9900",
          600: "D48000",
        }, 
        secondary: "#FFE600",
        accent: "#DB4444"
      },
      fontFamily:{
        heading:['Yeseva One', 'serif'],
        body:['Josefin Sans', 'sans-serif']
      }
    }
    
  },
  plugins: [],
}