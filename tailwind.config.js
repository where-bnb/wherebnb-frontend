/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#3BD16F",
        accent: "#008489",
        error: "#C13515",
      },
      scrollbarHide: {
        "-ms-overflow-style": "none", // IE와 Edge를 위한 설정
        "scrollbar-width": "none", // Firefox를 위한 설정
        "&::-webkit-scrollbar": {
          // Chrome, Safari, Opera를 위한 설정
          display: "none",
        },
      },
    },
  },
  mode: "jit",
  important: true,
  plugins: [],
};
