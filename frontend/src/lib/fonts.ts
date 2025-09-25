import { Montserrat_Alternates, Inter } from "next/font/google";
import localFont from "next/font/local";

export const montserratAlt1SemiBold = localFont({
  src: "../fonts/MontserratAlt1-SemiBold.woff2",
});
export const montserratAlt1Light = localFont({
  src: "../fonts/MontserratAlt1-Light.woff2",
});

// export const montserratAlt1 = Montserrat_Alternates({
//   subsets: ["latin", "latin-ext"],
//   weight: ["500", "600"],
//   variable: "--font-montserrat-alt1",
// });

export const inter = Inter({ subsets: ["latin"] });
