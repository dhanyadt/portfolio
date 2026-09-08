/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        theme: {
          bg: 'var(--color-bg)',
          surfaceWhite: 'var(--color-surface-white)',
          surfaceCream: 'var(--color-surface-cream)',
          textPrimary: 'var(--color-text-primary)',
          textSecondary: 'var(--color-text-secondary)',
          textBlush: 'var(--color-text-blush)',
          accent: 'var(--color-accent)',
          accentDark: 'var(--color-accent-dark)',
          highlight: 'var(--color-highlight)',
          border: 'var(--color-border)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Instrument Serif', 'serif'],
      },
      boxShadow: {
        soft: '0 8px 30px rgba(43, 36, 32, 0.06)',
        softHover: '0 14px 40px rgba(43, 36, 32, 0.10)',
      }
    },
  },
  plugins: [],
}
