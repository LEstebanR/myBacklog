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
        secondary: '#e0f2fe',
      },
      gradientColorStops: {
        primary: '#00DFA2',
        secondary: '#e0f2fe',
      },
    },
  },
  plugins: [],
}
