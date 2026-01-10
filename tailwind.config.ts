import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class', // Changed to 'class' for manual toggling if needed
  theme: {
    extend: { 
      fontFamily: {
        // Updated to match the '@font-face' names in globals.css
        playfair: ['TrueFlair', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'], 
      },
      fontWeight: {
        thin: '100',
        'extra-light': '200',
        light: '300',
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
      colors: {
        // Mapped to your new Luxury Palette in globals.css
        primary: {
          gold: 'var(--primary-gold)',   // #D4AF37
          steel: 'var(--primary-steel)', // #E5E7EB
          teal: 'var(--primary-teal)',   // #1F7A8C
        },
        bg: {
          primary: 'var(--bg-primary)',   // #0F1012
          secondary: 'var(--bg-secondary)', // #1A1C1E
        },
        text: {
          primary: 'var(--text-primary)',   // #F3F4F6
          secondary: 'var(--text-secondary)', // #9CA3AF
          dark: 'var(--text-dark)',
        },
        glass: {
          border: 'var(--glass-border)',
          bg: 'var(--glass-bg)',
        }
      },
      screens: {
        'sm': '480px', 
        'md': '769px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1439px',
        '3xl': '2050px',
      },
    },
  },
  plugins: [],
} satisfies Config;