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
        yellow: "#FFD97D",

        blue: "#044389"
      },
      animation: {
        fade: "fadeIn 5s ease-in-out",
      },
      keyframes: theme => ({
        fadeIn: {
          "0%": { opacity: "0%" },
          "100%": { opacity: "100%" },
        }
      })
    },
  },
  plugins: [],
};
export default config;
