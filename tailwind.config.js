/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0F2A44",
        secondary: "#1C3D5A",
        background: "#F5F7FA",
        textDark: "#0B1F33",
        textLight: "#6B7280",
        accent: "#3B82F6",
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Jost", "sans-serif"],
      },
      screens: {
        xs: "360px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
};
