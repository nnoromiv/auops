import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './emails/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"]
      },
      colors: {
        "gray-100": "#777777",
        "primary-color": {
          default: "#0FABBE",
          light: "#7bdcb5",
          100: "#FFFFFF"
        },
        "orange-100": "#EF7437",
        "secondary-color": "#444444",
        "bg-wrapper-100": "#3B668C",
        "bg-wrapper-200": "#282B30",
        "gradient": "#263336",
      },
      backgroundImage : {
        'hero-bg': "url('/Hero.jpg')"
      },
      keyframes : {
        moveBackground: {
          '0%' : {
            transform: 'perspective(500px) rotateX(0deg)',
            background: '#0FABBE'
          },
          '100%' : {
            transform: ' perspective(500px) rotateX(180deg)',
            background: '#0FABBE'
          }
        }
      },
      animation : {
        moveBackground: 'moveBackground 1s ease-in-out'
      }
    },
  },
  plugins: [
    require("daisyui"), 
  ],
}
export default config
