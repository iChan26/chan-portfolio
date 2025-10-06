/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        termina: [
          '"Termina"',
          'sans-serif',
          'Inter',
          'Helvetica Neue',
          'Arial',
          'Playfair Display',
          'Georgia',
          'serif',
        ],
        techno: ['"Orbitron"', 'sans-serif'],
        mono: ['"Share Tech Mono"', 'monospace'],
        sans: ['Poppins', 'sans-serif'],
        modern: ['Poppins', 'sans-serif'],
      },

      maxWidth: {
        container: '1320px',
      },

      padding: {
        section: '7rem',
        'section-sm': '4rem',
      },

      spacing: {
        'gap-default': '2.5rem',
        'gap-lg': '3.5rem',
      },

      fontSize: {
        base: ['1.125rem', { lineHeight: '1.9' }],
        lg: ['1.25rem', { lineHeight: '2.1' }],
        xl: ['1.5rem', { lineHeight: '2.25' }],
        heading: ['2.75rem', { lineHeight: '1.2' }],
      },

      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
      },

      boxShadow: {
        subtle: '0 4px 12px rgba(0,0,0,0.06)',
        card: '0 6px 24px rgba(0,0,0,0.08)',
      },

      height: {
        '1.5px': '1.5px',
      },

      transitionDuration: {
        400: '400ms',
        600: '600ms',
      },

      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        underlineIn: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        shine: {
          '0%': { transform: 'translateX(-150%) skewX(-20deg)', opacity: '0.4' },
          '50%': { opacity: '0.8' },
          '100%': { transform: 'translateX(150%) skewX(-20deg)', opacity: '0.4' },
        },
      },
      animation: {
        slideDown: 'slideDown 0.5s ease-out forwards',
        underlineIn: 'underlineIn 0.3s ease-in-out forwards',
        shine: 'shine 1.8s ease-in-out infinite',
      },
      animation: {
        slideDown: 'slideDown 0.5s ease-out forwards',
        underlineIn: 'underlineIn 0.3s ease-in-out forwards',
        shine: 'shine 1.5s linear infinite',
      },
    },
  },
  plugins: [],
};
