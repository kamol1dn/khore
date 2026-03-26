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
        charcoal: {
          900: "#09090b", // Deepest background
          800: "#18181b", // Secondary backgrounds
          700: "#27272a", // Borders and low contrast
        },
        accent: {
          green: "#00ff66", // Terminal green
          red: "#ff3333", // Vulkan red
          blue: "#33bbff", // Electric blue
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--font-fira-code)"],
      },
      backgroundImage: {
        'grid-pattern': "url('/grid.svg')"
      }
    },
  },
  plugins: [],
};
export default config;
