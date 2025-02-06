import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        cormorant: 'var(--font-cormorant)',
        'monsieur-la-doulaise': 'var(--font-monsieur-la-doulaise)',
        'bodoni-moda': 'var(--font-bodoni-moda)',
      },
    },
  },
  plugins: [],
} satisfies Config
