/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./**/**.html",
    "./**/*.{html,js}",
  ],
  // content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        darkBg: "#070b14",
        lightBg: "#111820",
        textColor: "#fefefe",
        lightBtn: "#6672fb",
        darkBtn: "#4f5df5",
        grayWhite: '#dedddd',
      },
    },
  },
  plugins: [],
};

