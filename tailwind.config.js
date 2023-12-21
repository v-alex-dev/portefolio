/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'wood': '#613F2E',
        'brun': '#9F643C',
        'taupe': '#CB8E62',
        'beige': '#DEB887',
        'sable': '#BA8052'
      }
    },
  },
  plugins: [],
}

