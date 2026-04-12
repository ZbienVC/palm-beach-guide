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
        // Warm sand — primary page background
        sand: {
          50:  "#faf7f2",
          100: "#f4ede0",
          200: "#e8d8bc",
          300: "#d9be93",
          400: "#c8a06a",
          500: "#b58240",
        },
        // Deep ocean teal — warmer, more coastal
        ocean: {
          50:  "#eef7f8",
          100: "#d4ecef",
          200: "#a6d4da",
          300: "#6cb8c2",
          400: "#3d9aaa",
          500: "#1f7d8e",
          600: "#155e6a",
        },
        // Palm — kept for accents
        palm: {
          50:  "#f2f9f3",
          100: "#dff0e2",
          300: "#86c98a",
          500: "#3a9e42",
          700: "#1e6124",
        },
        // Warm dusk — nightlife section
        dusk: {
          800: "#1a1b2e",
          900: "#0f0f1a",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["system-ui", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      fontSize: {
        "2xs": ["10px", { lineHeight: "14px" }],
      },
      boxShadow: {
        card: "0 1px 3px rgba(0,0,0,0.06), 0 4px 12px rgba(0,0,0,0.04)",
        "card-hover": "0 2px 8px rgba(0,0,0,0.10), 0 8px 24px rgba(0,0,0,0.06)",
        action: "0 2px 6px rgba(0,0,0,0.15), 0 8px 20px rgba(0,0,0,0.10)",
      },
    },
  },
  plugins: [],
};
export default config;