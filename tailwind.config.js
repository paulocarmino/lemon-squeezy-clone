module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-200': '#c19fdb',
        'primary-400': '#7e59ed',
        'primary-500': '#7047eb'
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
}
