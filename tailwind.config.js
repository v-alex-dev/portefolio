/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue':'#152837',
        'orange':'#E69F34',
        'light-orange':'#FFBD59',
        'light-gray':'#F1F1F1',
        'dark': '#000000',
        'white': '#FFFFF1',
      },
      backgroundImage: {
        'bg-site': "url('./src/assets/bg-bureau.jpeg')",
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        blackOpsOne: ['Black Ops One', 'cursive'],
      },
    },
  },
  plugins: [],
}

