/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#fff1f1',
          100: '#ffe1e1',
          200: '#ffc7c7',
          300: '#ffa0a0',
          400: '#ff6262',
          500: '#f42a2f',
          600: '#ed1c24',
          700: '#c8141b',
          800: '#a31219',
          900: '#5f0a0f',
        },
        accent: {
          50: '#fff9eb',
          100: '#ffefc7',
          200: '#ffe08a',
          300: '#ffd05a',
          400: '#ffc24b',
          500: '#f5ab1f',
          600: '#d98a10',
          700: '#b06a10',
          800: '#8a5414',
          900: '#6e4415',
        },
        ink: {
          50: '#f7f6f3',
          100: '#eeece8',
          200: '#dcd9d3',
          300: '#bdb9b1',
          400: '#8d8982',
          500: '#67645e',
          600: '#4a4844',
          700: '#33322f',
          800: '#1f1e1c',
          900: '#0e0e0d',
        },
        success: {
          100: '#dcfce7',
          500: '#16a34a',
          600: '#15803d',
          700: '#166534',
        },
        whatsapp: {
          500: '#25d366',
          600: '#1ebe5a',
        },
      },
      boxShadow: {
        soft: '0 1px 2px rgba(14,14,13,0.04), 0 12px 32px -12px rgba(14,14,13,0.12)',
        lift: '0 2px 4px rgba(14,14,13,0.04), 0 24px 48px -16px rgba(14,14,13,0.22)',
      },
    },
  },
  plugins: [],
};
