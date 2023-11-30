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
        redShadow: "#872A22",
        blue: "#064987",
        black: "#181917",
        yellow: "#2C2A2A",
        silver: "#C6CFCE",
      },
    },
  },
  plugins: [],
};
export default config;
