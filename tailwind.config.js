/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        electric: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        dark: {
          900: '#030712',
          800: '#0a0f1e',
          700: '#0d1526',
          600: '#111827',
          500: '#1a2236',
        }
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern': `linear-gradient(rgba(59, 130, 246, 0.05) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(59, 130, 246, 0.05) 1px, transparent 1px)`,
        'glow-electric': 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
      },
      backgroundSize: {
        'grid': '60px 60px',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      boxShadow: {
        'electric': '0 0 20px rgba(59, 130, 246, 0.3)',
        'electric-lg': '0 0 40px rgba(59, 130, 246, 0.4)',
        'card': '0 4px 24px rgba(0, 0, 0, 0.4)',
      }
    },
  },
  plugins: [],
}
