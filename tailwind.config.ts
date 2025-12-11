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
            light: "#3B82F6", // Blue-500
            DEFAULT: "#1E40AF", // Blue-700
            dark: "#1E3A8A", // Blue-800
          },
          orange: {
            light: "#F97316", // Orange-500
            DEFAULT: "#EA580C", // Orange-600
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