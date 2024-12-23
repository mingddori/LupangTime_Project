/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extned : {}
  },
  plugins: [require("@tailwindcss/typography")],
};
