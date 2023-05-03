/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      // https://tailwindcss.com/docs/breakpoints
      sm: '640px',
      md: '768px',
      lg: '1024px', // 976px
      xl: '1280px', // 1264px

      // https://tailwindcss.com/docs/breakpoints#app
      '2xl': '1536px',
    },

    extend: {
      colors: {
        // darkGray: '#111827', //'#111827',
        darkGray: '#1F2937', //'#111827', #374151
        darkGrayishBlue: '#374151',
        lightgray: '#F3F4F6',
        darkBlue: '#1E40AF',
        darkLime: '#065F46', // '#065F46',
        darkGreen: '##166534',
      },
    },
  },
  plugins: [],
}
