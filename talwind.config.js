/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        emerald: {
          DEFAULT: '#0B8F5A',
          dark: '#076B43',
          light: '#E6F4EE',
        },
        gold: {
          DEFAULT: '#D4AF37',
          light: '#F7EFD6',
          dark: '#A9862B',
        },
        navy: {
          DEFAULT: '#12355B',
          dark: '#0C2540',
        },
        ink: '#333333',
        offwhite: '#F7F8F6',
      },
      fontFamily: {
        display: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(160deg, #0B8F5A 0%, #12355B 100%)',
      },
      borderRadius: {
        dome: '999px 999px 16px 16px',
      },
    },
  },
  plugins: [],
};