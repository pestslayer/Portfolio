/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customPurple: "#1A0B2E",
        background: "#11071F",
        boxOne: "#130428",
        button: "#693B93"
      }
    },
  },
  plugins: [],
}
