import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand color - blue dominant
        'brand-blue': '#1E5A8A',
        'brand-blue-dark': '#154668',
        'brand-blue-light': '#2A7AB8',
        // Secondary accent - green
        'lawn-green': '#7db02a',
        'lawn-green-dark': '#5c8520',
        'lawn-green-light': '#9cd04a',
        // Accent colors
        'patriot-red': '#B22234',
        'patriot-red-dark': '#8B1A28',
        'patriot-red-light': '#D4293F',
        'accent-orange': '#7db02a', // Now using green
        'accent-orange-light': '#9cd04a', // Now using green
        // Legacy aliases for gradual migration
        'navy-blue': '#1E5A8A',
        'navy-blue-dark': '#154668',
        'navy-blue-light': '#2A7AB8',
        'background': '#F8F9FA',
        'text-primary': '#1F2937',
        'text-secondary': '#4B5563',
      },
      fontFamily: {
        'display': ['Oswald', 'sans-serif'],
        'body': ['Source Sans 3', 'sans-serif'],
      },
      backgroundImage: {
        'grass-pattern': "url('/images/grass-texture.svg')",
        'hero-gradient': 'linear-gradient(135deg, rgba(30, 90, 138, 0.95) 0%, rgba(42, 122, 184, 0.9) 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'slide-up': 'slideUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.8s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
