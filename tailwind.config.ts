import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary_blue: '#4A77FF',
        primary_green: '#00C696',
        light_green: '#BBF3D2',
        nephritis: '#E9F7EF',
        lightest_green: '#40E2E8',
        primary_black: '#1D1E26',
        lighter_black: '#344054',
        lightest_black: '#5E626F',
        slight_light: '#fbfbfb'
      },
    },
  },
  plugins: [],
};
export default config;
