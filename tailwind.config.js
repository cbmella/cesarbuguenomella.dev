/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      colors: {
        'science-blue': '#076ec6',
        'polar': '#e0f3f9',
        'cobalt': '#0436d0',
        'cerulean': '#0e9ac1',
        'turquoise': '#2ececc',
        'danube': '#599ac5',
        'jelly-bean': '#236999',
        'royal-blue': '#1e72e5',
      }
    },
  },
  plugins: [],
}
