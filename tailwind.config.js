/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        slidein: {
          from: {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        bounce: {
          "0%, 100%": {
            transform: "translateY(-25%)",
          },
          "50%": {
            transform: "translateY(0)",
          },
        },
        animation: {
          slidein300: "slidein 1s ease 300ms",
          slidein500: "slidein 1s ease 400ms",
          slidein700: "slidein 1s ease 700ms",
          bounce: "bounce 5s ease-in-out infinite ",        
      },
      },
    },
    plugins: [],
  }}