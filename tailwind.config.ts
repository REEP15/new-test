import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        shell: '#0A0A0A',
        panel: '#141414',
        text: '#F5F5F5',
        accent: '#E6E6E6',
        luxury: '#D6B36A'
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(130deg, rgba(5,5,5,0.92), rgba(5,5,5,0.25))'
      }
    }
  },
  plugins: []
};

export default config;
