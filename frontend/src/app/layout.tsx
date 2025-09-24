import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ConditionalNavigation from "@/components/ConditionalNavigation";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <ConditionalNavigation></ConditionalNavigation>
        {children}
      </body>
    </html>
  );
}
