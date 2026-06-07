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
        brand: {
          blue: "#087AEC",
          "blue-dark": "#0560BB",
          "blue-light": "#F0F5FF",
          dark: "#292D32",
          gray: "#E0E0E1",
          "gray-dark": "#4A4A4A",
          white: "#FFFFFF",
        },
      },
      fontFamily: {
        raleway: ["var(--font-raleway)", "sans-serif"],
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
      maxWidth: {
        container: "1536px",
      },
      borderRadius: {
        button: "16px",
      },
      keyframes: {
        "marquee-left": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "marquee-right": {
          from: { transform: "translateX(-50%)" },
          to: { transform: "translateX(0)" },
        },
      },
      animation: {
        "marquee-left": "marquee-left 60s linear infinite",
        "marquee-right": "marquee-right 60s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
