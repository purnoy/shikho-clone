/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      
    },
    screens: {
      sm: '640px',
      md: '880px',
      lg: '1124px',
      xl: '1440px',
    },
  },
  plugins: [],
}
