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
  description: "A modern Next.js application with TypeScript and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <head>
        {process.env.UMAMI_PUBLIC_SRC && (
          <script
            async
            defer
            src={process.env.UMAMI_PUBLIC_SRC}
            data-website-id={process.env.UMAMI_WEBSITE_ID}
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
