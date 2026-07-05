/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        charcoal: '#121212',
        offwhite: '#F5F5F7',
        accent: '#E63946',
        'muted-gray': '#9CA3AF'
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['"Space Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      // Keep animations very subtle for quiet luxury
      animation: {
        'float-slow': 'float-slow 6s ease-in-out infinite'
      },
      keyframes: {
        'float-slow': {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
          '100%': { transform: 'translateY(0px)' }
        }
      }
    },
  },
  plugins: [],
}
