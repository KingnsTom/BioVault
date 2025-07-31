// tailwind.config.js
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#05b9b5',     // from your .text-[#05b9b5] usage
        secondary: '#215a69',   // example, update as needed
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
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
