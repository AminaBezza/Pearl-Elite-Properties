import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#C9A227',
          light: '#E8C96A',
          dim: 'rgba(201,162,39,0.15)',
        },
        luxury: {
          black: '#0B0B0B',
          gray: '#F5F5F5',
        },
      },
      fontFamily: {
        heading: ['var(--font-playfair)', 'serif'],
        body: ['var(--font-jost)', 'sans-serif'],
      },
      borderRadius: {
        none: '0px',
        DEFAULT: '0px',
      },
    },
  },
  plugins: [],
}

export default config
