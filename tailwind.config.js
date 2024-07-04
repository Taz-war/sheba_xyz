/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage:{
        'hero-bg':"url('/src/images/hero_bg.webp')"
      }
    },
  },
  corePlugins:{
    container:false
  },
  plugins: [
    function ({addComponents}) {
      addComponents({
        '.container':{
          maxWidth:'100%',
          '@screen sm':{
            maxWidth:'600px',
          },
          '@screen md': {
            maxWidth: '720px',
          },
          '@screen lg': {
            maxWidth: '960px',
          },
          '@screen xl': {
            maxWidth: '1140px',
          },
          '@screen 2xl': {
            maxWidth: '1320px',
          },
        }
      })
    }
  ],
}

