import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "20px",
          sm: "10px",
          md: "20px",
          lg: "30px",
        },
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "serif"],
        roboto: ["var(--font-roboto)", "sans-serif"],
      },
      fontSize: {
        s: ["14px", { lineHeight: "1" }],
        l: ["60px", { lineHeight: "1.2" }],
      },
      colors: {
        slate: {
          850: "hsl(222deg 47% 16%)",
        },
        main: {
          sectionBG: "rgb(7, 29, 39)",
          mainBG: "rgb(8, 30, 41)",
        },
        customTeal: {
          DEFAULT: "rgb(27, 130, 141)",
          accent: "rgb(38, 152, 165)",
        },
      },
    },
  },
  plugins: [],
};
export default config;

// "rgb(5, 21, 30)",
// "rgb(6, 24, 34)",
// primary: { DEFAULT: "rgb(95, 195, 231)" },

// #645609 - yellow deep;
// #e4dbad - yellow;
// #9ca3af - introduction mainGray;
// #e5e7eb - introduction containerGray;
// #f3f4f6 - introduction containerLightGray;
