import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        p: '#3490dc', // primary
        s: '#ffed4a', // secondary
        a: '#f9acaa', // accent
        white: '#ffffff', // white
        black: '#000000', // black
      },
      dark: {
        p: '#1d4ed8', // primary
        s: '#fbbf24', // secondary
        a: '#f87171', // accent
        white: '#ffffff', // white
        black: '#000000', // black
      }
    },
  },
  plugins: [],
};
export default config;
