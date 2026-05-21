/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        soft: "0 10px 30px rgba(2, 6, 23, 0.08)",
        dropdown: "0 24px 60px rgba(2, 6, 23, 0.16)",
      },
      borderRadius: {
        xl2: "1.25rem", // 20px (thay vì phải nhớ rounded-2xl)
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        "fade-in": "fadeIn 160ms ease-out both",
        "fade-in-down": "fadeInDown 180ms ease-out both",
        "fade-in-up": "fadeInUp 220ms ease-out both",
        "slide-in-right": "slideInRight 240ms ease-out both",
      },
    },
  },
  plugins: [],
};
