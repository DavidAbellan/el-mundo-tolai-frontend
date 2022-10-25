/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: ["./src/components/*.{html,js,jsx}"],
    fontFamily : {
      'Oswald':['"Oswald"'],
      'IBM' : ['"IBM Plex Sans Condensed"'],
      'PlayFair':['"Playfair Display"'],
      'Roboto':['"Roboto"'],
      'Tangerine':['"Tangerine"']
    },
    strokeWidth:{
      '2':'20px'
    }
  },
  plugins: [],
}
