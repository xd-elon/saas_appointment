module.exports = {
  content: [
    './index.html', 
    './src/**/*.{js,ts,jsx,tsx}', 
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          bluebasic: "#109CF1",
          graybasic: "#69686A",
          bluecommon: "#F2F9FF",
          lightgray: "#F5F6F8",
          blue2: "#0061FF"
        }
      }
    },
  },
  plugins: [],
}