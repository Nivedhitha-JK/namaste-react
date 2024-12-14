/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customGray: "#3d4152",
        bodyGray: "#f2f2f2",
      },
    },
  },
  plugins: [],
};
