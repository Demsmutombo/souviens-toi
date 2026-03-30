/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A237E',
        secondary: '#FFD600',
        light: '#FFFFFF',
        dark: '#1A237E',
        'dark': '#212529',
      },
      fontFamily: {
        'jost': ['Jost', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
