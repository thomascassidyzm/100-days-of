/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // SSi brand colors - dark theme with red accents
        'ssi-red': '#DC2626',
        'ssi-red-dark': '#991B1B',
        'ssi-red-light': '#EF4444',
        'ssi-dark': '#0F0F0F',
        'ssi-dark-lighter': '#1A1A1A',
        'ssi-gray': '#2A2A2A',
        'ssi-gray-light': '#404040',
        'ssi-text': '#E5E5E5',
        'ssi-text-dim': '#A3A3A3',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}