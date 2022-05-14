module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  // mode: 'jit',
  // purge: {
  //   options: {
  //     safelist: [/data-theme$/],
  //   },
  // },
  darkMode: 'class',
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [require('./styles/daisyui-themes.json')],
  },
};
