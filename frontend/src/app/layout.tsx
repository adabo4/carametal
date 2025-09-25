import type { Metadata } from "next";
import "./globals.css";
import ConditionalNavigation from "@/components/ConditionalNavigation";

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
      <body>
        <ConditionalNavigation></ConditionalNavigation>
        {children}
      </body>
    </html>
  );
}
