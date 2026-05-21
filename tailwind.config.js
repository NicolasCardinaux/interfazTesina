/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        background: '#F8FAFC',
        surface: '#FFFFFF',
        primary: {
          DEFAULT: '#4F46E5', // Indigo 600
          hover: '#4338CA', // Indigo 700
          light: '#EEF2FF', // Indigo 50
        },
        textMain: '#0F172A',
        textMuted: '#64748B',
        success: {
          DEFAULT: '#10B981',
          bg: '#D1FAE5',
        },
        danger: {
          DEFAULT: '#EF4444',
          bg: '#FEE2E2',
        },
        warning: {
          DEFAULT: '#F59E0B',
        }
      },
      boxShadow: {
        card: '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        glass: '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
        drawer: '-10px 0 40px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
}
