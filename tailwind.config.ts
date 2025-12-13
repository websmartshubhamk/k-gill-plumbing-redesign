import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // K Gill Brand Colors
        brand: {
          blue: {
            light: "#1a4a8a", // Lighter variant
            DEFAULT: "#092e5a", // Main brand blue
            dark: "#061f3d", // Darker variant
          },
          orange: {
            light: "#ffb733", // Lighter variant
            DEFAULT: "#ffa500", // Main accent orange
            dark: "#cc8400", // Darker variant for hover
          },
        },
        // Semantic Colors
        emergency: "#DC2626", // Red-600
        success: "#059669", // Emerald-600
        info: "#0EA5E9", // Sky-500
        whatsapp: "#25D366", // WhatsApp Green
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        display: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-down": "slideDown 0.3s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      screens: {
        "3xl": "1920px",
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
}
export default config