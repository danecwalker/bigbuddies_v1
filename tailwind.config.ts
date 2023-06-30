import type { Config } from 'tailwindcss'

export default {
  content: ["app/**/*.{html,ts,js,tsx,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        dyslexia: ['opendyslexic', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config

