import { Montserrat_Alternates, Inter } from "next/font/google";
import localFont from "next/font/local";

export const montserratAlt1SemiBold = localFont({
  src: "../fonts/MontserratAlt1-SemiBold.woff2",
  variable: "--font-monserratSemiBold",
});
export const montserratAlt1Light = localFont({
  src: "../fonts/MontserratAlt1-Light.woff2",
});

export const avenirLight = localFont({
  src: "../fonts/Avenir Light.ttf",
  variable: "--font-avenirLight",
});
export const ganache = localFont({
  src: "../fonts/Ganache Regular.ttf",
  variable: "--font-ganache",
});

// export const montserratAlt1 = Montserrat_Alternates({
//   subsets: ["latin", "latin-ext"],
//   weight: ["500", "600"],
//   variable: "--font-montserrat-alt1",
// });

export const inter = Inter({ subsets: ["latin"] });
