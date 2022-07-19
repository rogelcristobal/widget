
module.exports = {
  mode: 'jit',
  content: [
    // Example content paths...
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      fontFamily:{
        "outfit":["Outfit","sans-serif"],
        "satoshi":["Satoshi","sans-serif"]
      }
    },
  },
  plugins: [],
}
