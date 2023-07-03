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
        academicOverview: 'url("https://shikho.com/images/shikho-program/academic_program_bg.png")'
      },
      
    },
    screens: {
      xsm:'540',
      sm: '750px',
      md: '1000px',
      lg: '1260px',
      xl: '1400x',
    },
  },
  plugins: [],
}
