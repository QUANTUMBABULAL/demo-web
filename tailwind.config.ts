import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#E0F2FE",
        foreground: "#111827",
        primary: {
          DEFAULT: '#1E3A8A',
          light: '#3B82F6'
        },
        accent: '#F59E0B'
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg,#1E3A8A,#3B82F6)',
        'body-gradient': 'linear-gradient(to bottom, #E0F2FE, #ffffff)'
      },
    },
  },
  plugins: [],
};
export default config;
