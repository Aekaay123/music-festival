/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        wave:{
          "0%,100%":{
            transform:"scale(0.5)",
          },
          "50%":{
            transform:"scale(1.5)",
          }
        },
        center:{
          "0%":{
            transform:"translateY(-80px) translateX(90px)",
          },
          "100%":{
            transform:"translateY(-200px) translateX(90px)",
          }
        }
      },
      animation:{
        waywe:"wave 1s ease-in-out infinite",
        center:"center 0.5s ease-in-out forwards",
      },
      fontFamily: {
        'quicksand': ['Quicksand', 'sans-serif'],
        'qwitcher': ['Qwitcher Grypen', 'cursive'],
      }
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('tailwind-scrollbar-hide')],
}

