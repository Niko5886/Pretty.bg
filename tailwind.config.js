/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#EFFDF0",
        "green-dark": "#1a3d1a",
        "green-hover": "#2a5a2a",
        orange: {
          DEFAULT: "#C2560B",
          hover: "#A84A08",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        "serif-display": ["'DM Serif Display'", "serif"],
      },
    },
  },
  plugins: [],
};
