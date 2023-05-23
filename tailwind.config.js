/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,tsx,ts,jsx}","./src/*.{html,js,tsx,ts,jsx}"],

  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

