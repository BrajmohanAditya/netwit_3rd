/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#0B3D91', 400: '#4C7BFF', 600: '#1157E0' },
        'accent-teal': '#14B8A6',
        'accent-gold': '#F59E0B',
        surface: { DEFAULT: '#FFFFFF', 2: '#F8FAFC' },
        success: '#16A34A',
        warning: '#F59E0B',
        danger: '#EF4444',
        bg: '#FFFFFF',
        'glow-blue': '#60a5fa',
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        'dm-sans': ['DM Sans', 'sans-serif'],
        jetbrains: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        xs: '11px', sm: '12px', base: '13px', md: '14px',
        lg: '16px', xl: '18px', '2xl': '22px', '3xl': '28px', hero: '36px',
      },
      borderRadius: {
        input: '8px', button: '10px', card: '16px', panel: '20px', modal: '24px',
      },
      boxShadow: {
        card: '0 4px 6px rgba(11, 61, 145, 0.08)',
        'glow-blue': '0 0 10px rgba(96, 165, 250, 0.4)',
      },
      spacing: {
        navbar: '72px', header: '80px', hero: '120px', section: '96px',
        'content-x': '80px', 'content-y': '72px', grid: '24px', 'grid-lg': '32px',
      },
    },
  },
  plugins: [],
}
