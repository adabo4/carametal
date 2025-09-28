import { Montserrat_Alternates, Inter, Roboto, Zeyada } from "next/font/google";
import localFont from "next/font/local";

export const montserratAlt1SemiBold = localFont({
  src: "../fonts/MontserratAlt1-SemiBold.woff2",
  variable: "--font-monserratSemiBold",
});
export const montserratAlt1Light = localFont({
  src: "../fonts/MontserratAlt1-Light.woff2",
});
export const montserratAltBold = localFont({
  src: "../fonts/MontserratAlt1-Bold.woff2",
  variable: "--font-montserratBold",
});

export const avenirLight = localFont({
  src: "../fonts/Avenir Light.ttf",
  variable: "--font-avenirLight",
});

export const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export const zeyada = Zeyada({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-zeyada",
});

// export const montserratAlt1 = Montserrat_Alternates({
//   subsets: ["latin", "latin-ext"],
//   style: ["normal"],
//   display: "swap",
//   weight: ["500", "600", "700"],
//   variable: "--font-montserrat-alt1",
// });

export const inter = Inter({ subsets: ["latin"] });
