/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        surface: '#141414',
        'surface-hover': '#1a1a1a',
        primary: '#ff6a00',
        'primary-hover': '#ff8840',
        'text-main': '#ffffff',
        'text-muted': '#a3a3a3',
        border: 'rgba(255, 255, 255, 0.1)',
        'glass-bg': 'rgba(10, 10, 10, 0.6)',
      },
      fontFamily: {
        heading: ['Manrope', 'sans-serif'],
        body: ['Work Sans', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(255, 106, 0, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(255, 106, 0, 0.5)' },
        },
      },
    },
  },
  plugins: [],
}
