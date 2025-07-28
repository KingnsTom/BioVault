const typography = require('@tailwindcss/typography');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',       // If using App Router
    './sanity/**/*.{js,ts,jsx,tsx}',    // If schema/components live here
    './styles/**/*.{css,scss}'          // If you have blog.css or global styles
  ],
  theme: {
    extend: {
      colors: {
        primary: '#05b9b5',   // Your brand color (teal)
        secondary: '#215a69',
        accent: '#f5a623',
        light: '#ffffff',
        dark: '#1a1a1a',
        'text-muted': '#6c757d'
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        heading: ['"Poppins"', 'sans-serif'],
        body: ['"Poppins"', 'sans-serif']
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' }
        }
      },
      animation: {
        float: 'float 3s ease-in-out infinite'
      }
    },
  },
  plugins: [
    typography({
      theme: {
        extend: {
          colors: {
            primary: '#05b9b5',  // Ensure this points to your brand's teal color
          },
        },
      },
    }),
  ],
};
