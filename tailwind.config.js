/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#3b82f6',  // Blue
          600: '#2563eb',
          700: '#1d4ed8',
        },
        secondary: {
          500: '#06b6d4',  // Cyan
          600: '#0891b2',
        },
        accent: {
          500: '#8b5cf6',  // Purple accent
        }
      },
      animation: {
        'pulse': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        }
      }
    },
  },
  plugins: [],
}