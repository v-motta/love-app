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
        monsieurLaDoulaise: 'var(--font-monsieur-la-doulaise)',
      },
    },
  },
  plugins: [],
} satisfies Config
