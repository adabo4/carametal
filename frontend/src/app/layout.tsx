import type { Metadata } from "next";
import "./globals.css";
import ConditionalNavigation from "@/components/Navbar/ConditionalNavigation";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
import {
  montserratAlt1Light,
  montserratAlt1SemiBold,
  montserratAltBold,
  roboto,
  zeyada,
} from "@/lib/fonts";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Carametal | Povrchové úpravy | Otryskávanie | Nitra",
  description:
    "Povrchové úpravy v Nitre, otryskávanie, protipožiarne a potravinárske nátery, nátery kontajnerov v Carametal.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <head>
        {process.env.NODE_ENV === "development"
          ? process.env.NEXT_PUBLIC_UMAMI_SRC && (
              <script
                async
                defer
                src={process.env.NEXT_PUBLIC_UMAMI_SRC}
                data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
              ></script>
            )
          : process.env.NEXT_PUBLIC_UMAMI_SRC_PROD && (
              <script
                async
                defer
                src={process.env.NEXT_PUBLIC_UMAMI_SRC_PROD}
                data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID_PROD}
              ></script>
            )}
      </head>
      <body
        className={`${montserratAlt1SemiBold.variable} ${roboto.variable} ${zeyada.variable} ${montserratAltBold.variable} ${montserratAlt1Light.variable}`}
      >
        <ConditionalNavigation></ConditionalNavigation>
        {children}
        <Footer></Footer>
        <ScrollToTop />
      </body>
    </html>
  );
}
