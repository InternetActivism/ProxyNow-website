/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,ts,css}"],
  theme: {
    extend: {
      colors: {
        'primary': '#0085FF',
        'grey-medium': '#e7e7e7'
      }
    },
  },
  plugins: [],
};
