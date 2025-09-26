import type { Metadata } from "next";
import "./globals.css";
import ConditionalNavigation from "@/components/ConditionalNavigation";
import { montserratAlt1SemiBold } from "@/lib/fonts";

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
      <body className={`${montserratAlt1SemiBold.variable}`}>
        <ConditionalNavigation></ConditionalNavigation>
        {children}
      </body>
    </html>
  );
}
