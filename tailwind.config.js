module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors : {
        gray : {
          400 : '#969798',
          500 : '#666666',
          700 : '#353535',
          800 : '#262626',
          900 : '#171818',
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
