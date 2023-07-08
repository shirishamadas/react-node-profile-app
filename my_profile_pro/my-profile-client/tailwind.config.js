/** @type {import('tailwindcss').Config} */
// import banner from './src/images/banner';
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      margin: {
        '600px': '600px',
      },
      backgroundImage: {
        'banner': "url('./src/images/banner')",
      }
    },
  },
  plugins: [],
}
