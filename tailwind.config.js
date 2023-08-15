/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      aton: ["Anton", "sans-serif"],
      gothic: ["Gothic A1", "sans-serif"],
      questrial: ["Questrial", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
