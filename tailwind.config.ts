import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        abyss: '#050508',
        'deep-navy': '#0a0e1a',
        'tactical-graphite': '#1a1f2e',
        surface: '#121826',
        'electric-cyan': '#00d4ff',
        'radar-green': '#00ff88',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
        display: ['var(--font-space)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;