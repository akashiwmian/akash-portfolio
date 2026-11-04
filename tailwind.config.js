/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        nature: {
          primary: '#163D2B',    // Forest Green
          secondary: '#102B21',  // Deep Green
          dark: '#0B1E17',       // Ultra Deep Forest
          surface: '#F7F8F3',    // Off White / Cream
          card: '#FFFFFF',
          accent: '#A5B89A',     // Sage Green
          accentLight: '#E3EADF',
          accentDark: '#758A69',
          water: '#5C9EAA',      // Water Accent
          waterLight: '#E6F3F5',
          waterDark: '#3D7681',
          text: '#26352C',       // Deep Pine / Text
          muted: '#627368',      // Muted Sage
          border: '#E1E7DE',     // Subtle border
          sand: '#ECEFE6',
        }
      },
      fontFamily: {
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['Newsreader', 'Playfair Display', 'serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace']
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(22, 61, 43, 0.05)',
        'elevated': '0 12px 36px -4px rgba(22, 61, 43, 0.1)',
        'card': '0 2px 10px rgba(16, 43, 33, 0.04), 0 0 1px rgba(16, 43, 33, 0.12)',
        'glow': '0 0 25px rgba(92, 158, 170, 0.25)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'water-ripple': 'ripple 4s cubic-bezier(0, 0.2, 0.8, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.75' },
        },
        ripple: {
          '0%': { transform: 'scale(0.95)', opacity: '0.8' },
          '50%': { transform: 'scale(1.05)', opacity: '0.4' },
          '100%': { transform: 'scale(0.95)', opacity: '0.8' },
        }
      }
    },
  },
  plugins: [],
}

