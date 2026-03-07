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
        'msc-blue': '#007bff',
        'msc-green': '#28a745',
        'msc-orange': '#fd7e14',
        'msc-purple': '#6f42c1',
      },
    },
  },
  plugins: [],
};
