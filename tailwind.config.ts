import type { Config } from 'tailwindcss'
import forms from '@tailwindcss/forms'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        deep: '#0B2A3C',
        wave: '#1E7FA8',
        foam: '#EAF4F7',
        sun: '#FFB627',
        ink: '#12202A',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['DM Sans', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [forms],
} satisfies Config
