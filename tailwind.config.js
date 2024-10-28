/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        myprimary: "#090D1F",
        ultraPink: "#6941C6",
        govern: "#3538CD",
        blurmagent: "#F9F5FF",
        balBlue: "#EEF4FF",
        magPink: "#C11574",
        magenta: "#FDF2FA",
        darkgray: "#667085",
        lightgray: "#C0C5D0",
        brightGray: "#EAECF0",
        brightPink: "#F9F5FF",
        soft: "#7F56D9",
      },
    },
  },
  plugins: [],
  darkMode: "selector",
};
