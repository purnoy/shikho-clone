/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: 'url("https://res.cloudinary.com/cross-border-education-technologies-pte-ltd/image/upload/q_auto/f_auto/c_scale,w_auto/v1671372706/h6wu8vg26spl9tqfyk82")',
      },
    },
    screens: {
      xsm:'500',
      sm: '700px',
      md: '900px',
      lg: '1100px',
      xl: '1300px',
      dxl: '1500px'
    },
  },
  plugins: [],
}
