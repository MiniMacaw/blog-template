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
        p: 'var(--primary)', // primary
        s: 'var(--secondary)', // secondary
        a: 'var(--accent)', // accent
        fc: 'var(--font-content)', // font content
        fh1: 'var(--font-heading-1)', // font hard 1
        fh2: 'var(--font-heading-2)', // font hard 2
        fh3: 'var(--font-heading-3)', // font hard 3
        fh4: 'var(--font-heading-4)', // font hard 4
        fh5: 'var(--font-heading-5)', // font hard 5
        white: 'var(--white)', // white
        black: 'var(--black)', // black
      },
    },
  },
  plugins: [],
};
export default config;
