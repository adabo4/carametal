import type { Metadata } from "next";
import "./globals.css";
import ConditionalNavigation from "@/components/Navbar/ConditionalNavigation";
import {
  montserratAlt1SemiBold,
  montserratAltBold,
  roboto,
  zeyada,
} from "@/lib/fonts";

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
      <body
        className={`${montserratAlt1SemiBold.variable} ${roboto.variable} ${zeyada.variable} ${montserratAltBold.variable}`}
      >
        <ConditionalNavigation></ConditionalNavigation>
        {children}
      </body>
    </html>
  );
}
