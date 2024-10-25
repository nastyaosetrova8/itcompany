import { Poppins, Questrial } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "700", "800"],
});

export const questrial = Questrial({
  subsets: ["latin"],
  variable: "--font-questrial",
  weight: "400",
});
