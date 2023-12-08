/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      'xxs' : '350px',
      'xs' : '425px',
      'xsm' : '479px',
      'ssm' : '560px' ,
      'sm' : '690px' , 
      'md' : '767px' , 
      'lg' : '993px',
      'llg' : '1099px' , 
      'xl' : '1199px' , 
      'xll' : '1365px',
      'xxl' : '1700px',
    },
    extend: {
      gridTemplateColumns: {
        1.1: '1fr 1.3fr',
        1.01: '1.3fr 1fr',
      },
      colors:{
        primary: '#ef4165',       //pink
        secondary: '#eac473',     //yellow
        light_secondary: '#ffeacf',
        light_gray: '#beb9bf',
        violet: '#372c44',
        light_violet: '#443548',
        text_violet : '#5c545f',
        darker_violet: '#18141a',
        t_violet: '#272228',
        light_blue: '#908ec1',
        blue: '#5f4e7c',
        dark_violet: '#583f74'
      }
    },
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true }), require('daisyui'),],
  daisyui:{
    theme: false,
    prefix: 'ds-'
  },
}
//272228 text violet
//ef4165 - pink
//eac473 - yellow
//372c44 - feedback
//443548 - feedback text
//18141a - be an elite/ footer inner icon
//908ec1 lighter footer 
//5f4e7c footer icon