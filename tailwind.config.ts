import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/app/**/*.{ts,tsx,mdx}',
    './src/components/**/*.{ts,tsx,mdx}',
    './src/content/**/*.mdx',
    './src/lib/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        '2xl': '1200px',
      },
    },
    extend: {
      colors: {
        bg: 'rgb(var(--color-bg) / <alpha-value>)',
        fg: 'rgb(var(--color-fg) / <alpha-value>)',
        primary: {
          DEFAULT: '#05B2DC',
          400: '#05B2DC',
          600: '#0B7CA7',
        },
        accent: '#004385',
        navy: {
          900: '#031A6B',
          800: '#033860',
          700: '#004385',
        },
        cyan: {
          600: '#0B7CA7',
          400: '#05B2DC',
        },
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        soft: '0 4px 30px rgba(3, 26, 107, 0.25)',
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #031A6B 0%, #004385 60%)',
        'grid-pattern': 'radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '24px 24px',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

export default config
