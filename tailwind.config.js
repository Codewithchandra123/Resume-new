/** @type {import('tailwindcss').Config} */
module.exports = {
  // THIS IS THE MOST IMPORTANT LINE TO FIX THE TOGGLE
  darkMode: 'class',

  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Make sure this path matches your project structure
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}