module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00DFA2',
        secondary: '#ECF8F9',
      },
      gradientColorStops: {
        primary: '#00DFA2',
        secondary: '#ECF8F9',
      },
    },
  },
  plugins: [],
}
