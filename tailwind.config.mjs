/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          500: '#f97316', // Wongnai orange / energetic food accent
          600: '#ea580c',
          700: '#c2410c'
        }
      }
    },
  },
  plugins: [],
}
