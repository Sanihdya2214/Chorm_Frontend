module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      animation: {
        "marquee-vertical": "marquee-vertical 12s linear infinite",
      },
      keyframes: {
        "marquee-vertical": {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(-100%)" },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
