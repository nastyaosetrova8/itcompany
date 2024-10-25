import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        questrial: ["var(--font-questrial)"],
      },
      fontSize: {
        s: ["12px", { lineHeight: "1" }],
        l: ["60px", { lineHeight: "1.2" }],
      },
      colors: {
        // background: "var(--background)",
        // foreground: "var(--foreground)",
        slate: {
          850: "hsl(222deg 47% 16%)",
        },
        primary: "#rgb(95, 195, 231)",
        customTeal: "rgb(27, 130, 141)",
        customTealAccent: "rgb(38, 152, 165)",
      },
    },
  },
  plugins: [],
};
export default config;
