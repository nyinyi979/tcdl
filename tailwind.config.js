/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#ef4165',       //pink
        secondary: '#eac473',     //yellow
        violet: '#372c44',
        light_violet: '#443548',
        dark_violet: '#18141a',
        light_blue: '#908ec1',
        blue: '#5f4e7c',
      }
    },
  },
}
//ef4165 - pink
//eac473 - yellow
//372c44 - feedback
//443548 - feedback text
//18141a - be an elite/ footer inner icon
//908ec1 lighter footer 
//5f4e7c footer icon