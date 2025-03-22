/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8a2be2',
        secondary: '#9370db',
        accent: '#e6e6fa',
        background: '#ffffff',
        foreground: '#171717',
        'light-purple': '#d8bfd8',
        'dark-purple': '#4b0082',
      },
    },
  },
  plugins: [],
} 