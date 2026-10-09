/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#0d5c5d',
          950: '#083c3d',
        },
        clinic: {
          primary: '#0A4D4E',
          'primary-hover': '#083B3C',
          'primary-light': '#116B6C',
          accent: '#14B8A6',
          'accent-light': '#E6F7F5',
          'accent-subtle': '#F0FAF9',
          dark: '#0F172A',
          charcoal: '#1E293B',
          muted: '#64748B',
          surface: '#F8FAFC',
          card: '#FFFFFF',
          border: '#E2E8F0',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -4px rgba(0, 0, 0, 0.03)',
        'card': '0 10px 30px -5px rgba(10, 77, 78, 0.07), 0 4px 10px -2px rgba(0, 0, 0, 0.03)',
        'card-hover': '0 20px 40px -10px rgba(10, 77, 78, 0.12), 0 8px 16px -4px rgba(0, 0, 0, 0.04)',
        'teal-glow': '0 10px 25px -5px rgba(10, 77, 78, 0.25)',
      }
    },
  },
  plugins: [],
}
