/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#100C09',
          900: '#15110D',
          850: '#1A1612',
          800: '#211C17',
          700: '#2A241E',
          600: '#3A332B',
          500: '#5B5147',
          400: '#7A6F62',
          300: '#A99E8E',
          200: '#D6CCBE',
          100: '#EDE6DA',
        },
        bone: {
          DEFAULT: '#F5F3EE',
          muted: '#D8D2C5',
        },
        brass: {
          50:  '#F7F1E4',
          100: '#EFE2C5',
          200: '#E4CFA1',
          300: '#D6BB82',
          400: '#C9A86A',
          500: '#B89456',
          600: '#9B7C45',
          700: '#7A6238',
          800: '#5A4929',
          900: '#3A301B',
        },
      },
      fontFamily: {
        serif: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        wider2: '0.22em',
        widest2: '0.28em',
      },
      boxShadow: {
        soft: '0 18px 50px -20px rgba(0,0,0,0.55)',
        editorial: '0 30px 80px -28px rgba(0,0,0,0.65)',
        brass: '0 0 0 1px rgba(201,168,106,0.18), 0 18px 40px -22px rgba(201,168,106,0.35)',
      },
      animation: {
        'fade-up': 'fadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-in': 'fadeIn 1s ease-out both',
        'hint-bounce': 'hintBounce 2.4s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        hintBounce: {
          '0%,100%': { transform: 'translateY(0)', opacity: '0.55' },
          '50%': { transform: 'translateY(8px)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
