/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './src/components/ui/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'siyb-blue': '#007bff',
        'siyb-green': '#28a745',
        'siyb-orange': '#fd7e14',
        'siyb-purple': '#6f42c1',
      },
    },
  },
  plugins: [],
}
