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
        'lawn-green': '#2D5A27',
        'lawn-green-dark': '#1E3D1A',
        'lawn-green-light': '#3A7533',
        'patriot-red': '#B22234',
        'patriot-red-dark': '#8B1A28',
        'patriot-red-light': '#D4293F',
        'navy-blue': '#1E3A5F',
        'navy-blue-dark': '#152A45',
        'navy-blue-light': '#2A4F7A',
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
        'hero-gradient': 'linear-gradient(135deg, rgba(45, 90, 39, 0.95) 0%, rgba(30, 58, 95, 0.9) 100%)',
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
