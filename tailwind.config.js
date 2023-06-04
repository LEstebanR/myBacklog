/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      white: '#FFFFFF',
      primary: '#00DFA2',
      secondary: '#ECF8F9',
      red: '#FF0000',
    },
    fontFamily: {
      sans: ['applesystem', 'sans-serif'],
      serif: ['Georgia', 'serif'],
    },
    extend: {},
  },
  plugins: [],
}
