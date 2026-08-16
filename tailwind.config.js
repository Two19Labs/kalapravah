/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        parchment: "#F8F5EE",
        card: "#FAF8F3",
        ink: "#1C1917",
        terracotta: "#B94A2D",
        ochre: "#C87A38",
        turmeric: "#D99B26",
        indigo: "#1E304B",
        sage: "#3E5A47",
        gold: "#C5A059",
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', '-apple-system', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
