/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        sky: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#0088ff',
          600: '#0066cc',
          700: '#004499',
        }
      },
      fontFamily: {
        sans: ['var(--font-cairo)', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
