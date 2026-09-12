import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      colors: {
        paper: '#faf9f5',
        'paper-card': '#f3f1ec',
        'paper-dark': '#121211',
        accent: '#ea580c', // International safety orange/terracotta
        'accent-dark': '#c2410c',
      },
    },
  },
  plugins: [],
} satisfies Config
