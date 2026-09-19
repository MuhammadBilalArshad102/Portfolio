/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],

  darkMode: "class",

  theme: {
    extend: {
      colors: {
        ink: {
          950: "#0A0C10",
          900: "#111318",
          800: "#181B22",
          700: "#22262F",
          600: "#2E333E",
          500: "#454B58",
          400: "#6B7280",
        },

        paper: {
          50: "#FAFAF8",
          100: "#F3F2EE",
          200: "#E8E6DF",
        },

        amber: {
          DEFAULT: "#E8A854",
          light: "#F0C381",
          dark: "#C6863A",
        },

        teal: {
          DEFAULT: "#4FD1C5",
          light: "#7EE0D6",
          dark: "#2FA89C",
        },
      },

      fontFamily: {
        sans: [
          "Times New Roman",
          "Times",
          "serif",
        ],

        mono: [
          "Times New Roman",
          "Times",
          "serif",
        ],
      },

      backgroundImage: {
        "grid-light":
          "linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)",

        "grid-dark":
          "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)",
      },

      backgroundSize: {
        grid: "32px 32px",
      },

      keyframes: {
        blink: {
          "0%, 49%": {
            opacity: 1,
          },
          "50%, 100%": {
            opacity: 0,
          },
        },

        fadeUp: {
          "0%": {
            opacity: 0,
            transform: "translateY(18px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },

        float: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },

        drift: {
          "0%, 100%": {
            transform: "translate(0, 0)",
          },
          "33%": {
            transform: "translate(12px, -14px)",
          },
          "66%": {
            transform: "translate(-10px, 10px)",
          },
        },
      },

      animation: {
        blink: "blink 1s step-end infinite",
        fadeUp: "fadeUp 0.7s ease-out forwards",
        float: "float 5s ease-in-out infinite",
        drift: "drift 12s ease-in-out infinite",
      },
    },
  },

  plugins: [],
};