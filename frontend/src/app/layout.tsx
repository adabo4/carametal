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
import DebugEnv from "@/components/DebugEnv";

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
        <script
          defer
          src="https://analytics.carametal.sk/script.js"
          data-website-id="70770e4e-f2ef-4a00-a77d-9f91d8eef77c"
        ></script>
      </head>
      <body
        className={`${montserratAlt1SemiBold.variable} ${roboto.variable} ${zeyada.variable} ${montserratAltBold.variable} ${montserratAlt1Light.variable}`}
      >
        <DebugEnv />
        <ConditionalNavigation></ConditionalNavigation>
        {children}
        <Footer></Footer>
        <ScrollToTop />
      </body>
    </html>
  );
}
