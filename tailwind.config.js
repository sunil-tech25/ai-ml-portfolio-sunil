/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        ink: '#090B10',
        deep: '#05070C',
        glass: 'rgba(255,255,255,0.07)',
        neonBlue: '#5CC8FF',
        neonOrange: '#FF5500',
        neonPurple: '#7C5CFF'
      },
      boxShadow: {
        glowBlue: '0 0 24px rgba(92,200,255,0.45)',
        glowOrange: '0 0 24px rgba(255,122,24,0.45)'
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['"Manrope"', 'system-ui', 'sans-serif']
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        drift: {
          '0%': { transform: 'translate3d(0,0,0)' },
          '50%': { transform: 'translate3d(30px,-20px,0)' },
          '100%': { transform: 'translate3d(0,0,0)' }
        },
        twinkle: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' }
        }
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        drift: 'drift 18s ease-in-out infinite',
        twinkle: 'twinkle 4s ease-in-out infinite'
      }
    }
  },
  plugins: []
};
