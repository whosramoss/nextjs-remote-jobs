import { Questrial } from "next/font/google";
import localFont from "next/font/local";

export const fontQuestrial = Questrial({
  subsets: ["latin"],
  display: "block",
  weight: ["400"],
});

export const fontNeueMontreal = localFont({
  src: [
    {
      path: "../../public/fonts/NeueMontreal-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
});
