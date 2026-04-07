import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0B1D3A',
          light: '#1B3A6B',
        },
        primary: {
          DEFAULT: '#1E56A0',
          light: '#3B82F6',
        },
        accent: {
          DEFAULT: '#E8870A',
          light: '#F2A63C',
        },
        tech: '#2563EB',
        surface: '#F8FAFC',
      },
      fontFamily: {
        sans: ['Inter', '"Noto Sans SC"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
