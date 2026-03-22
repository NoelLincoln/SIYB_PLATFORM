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
        // Brand — MSC corporate palette
        'msc-navy': '#1B2A4A',
        'msc-navy-dark': '#111C30',
        'msc-mustard': '#C5973A',
        'msc-mustard-light': '#D4A843',
        'msc-mustard-dark': '#A67E2E',
        'msc-slate': '#64748B',
        'msc-surface': '#F8FAFC',
        'msc-border': '#E2E8F0',

        // Legacy aliases — keep so nothing breaks
        'msc-blue': '#1B2A4A',
        'msc-green': '#C5973A',
        'msc-orange': '#C5973A',
        'msc-purple': '#1B2A4A',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
