/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       colors: {
                        primary: '#1565C0',
                        accent: '#F57C00',
                        dark: '#333333',
                        light: '#F2F2F2',
                    },
    },
  },
  plugins: [],
}