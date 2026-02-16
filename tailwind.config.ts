import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0f172a',
          light: '#1e293b',
          muted: '#334155',
        },
        sand: {
          DEFAULT: '#f5f0e8',
          dark: '#e8e0d4',
          muted: '#d4cbb8',
        },
        sail: '#e0ebe8',
        gold: '#b8860b',
        'gold-muted': '#d4af37',
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-source-sans)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 3px rgba(15, 23, 42, 0.08), 0 4px 12px rgba(15, 23, 42, 0.04)',
        'card-hover': '0 4px 12px rgba(15, 23, 42, 0.1), 0 8px 24px rgba(15, 23, 42, 0.06)',
      },
    },
  },
  plugins: [],
};

export default config;
