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
        sand: { 50: "#fdfaf5", 100: "#f8f0e0", 200: "#eedfc0", 300: "#e2c99a", 400: "#d4af7a", 500: "#c49660" },
        ocean: { 50: "#f0f7ff", 100: "#dceffe", 200: "#b2dafd", 300: "#77bbfb", 400: "#3b97f7", 500: "#1a78e4", 600: "#0f5bba" },
        palm: { 50: "#f2f9f2", 100: "#e0f2e0", 200: "#b8e2b8", 300: "#85cb85", 400: "#52b052", 500: "#2e8b2e" },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["system-ui", "-apple-system", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;