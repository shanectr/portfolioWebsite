/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/sections/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/assets/**/*.{svg,png,jpg}", // Added this to match your original content array in the .js config
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
      },
    },
    extend: {
      fontFamily: {
        sans: "var(--font-sans)",
        serif: "var(--font-serif)",
      },
      animation: {
        "ping-large": "ping-large 1s ease-in-out infinite",
        "move-left": "move-left 1s linear infinite",
        "move-right": "move-right 1s linear infinite",
      },
      keyframes: {
        "ping-large": {
          "75%, 100%": {
            transform: "scale(3)",
            opacity: "0",
          },
        },
        "move-left": {
          "0%": {
            transform: "translateX(0%)",
          },
          "100%": {
            transform: "translateX(-50%)",
          },
        },
        "move-right": {
          "0%": {
            transform: "translateX(-50%)",
          },
          "100%": {
            transform: "translateX(0%)",
          },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".mask-corner-fade": {
          "mask-image": "radial-gradient(circle, black 40%, transparent 90%)",
          "-webkit-mask-image":
            "radial-gradient(circle, black 40%, transparent 90%)",
        },
      });
    },
  ],
};
