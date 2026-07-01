/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Cabinet Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['Outfit', 'system-ui', 'sans-serif'],
      },
      colors: {
        void: '#0b0a09',
        char: '#141210',
        surface: '#1b1815',
        cream: '#f2eee7',
        ash: '#a49d90',
        ash2: 'rgba(242,238,231,.12)',
        gold: '#cba35c',
        gold2: '#e3c589',
      },
      letterSpacing: { tightest: '-0.03em' },
      maxWidth: { site: '1400px' },
    },
  },
  plugins: [],
}
