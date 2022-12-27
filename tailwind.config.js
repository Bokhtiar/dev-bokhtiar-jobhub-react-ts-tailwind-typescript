/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/daisyui/dist/**/*.js",
    "node_modules/react-daisyui/dist/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        danger: "#EB1D36",
      },
      backgroundImage: {
        cvbackground: "url('assets/cv_bg.jpg')",
        aboutbackground: "url('assets/about_bg.jpg')",
      },
    },
  },
  plugins: [require("daisyui")],
};
