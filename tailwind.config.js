/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '13': '3.25rem',
      },
      borderSpacing: {
        '13': '3.25rem',
      },
    },
  },
  plugins: [],
}

