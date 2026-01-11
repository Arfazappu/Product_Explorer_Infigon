import type { Metadata } from "next";
import { Montserrat } from 'next/font/google'
import "./globals.css";
import { FavoritesProvider } from "@/lib/FavoritesContext";

const montserrat = Montserrat({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Product Explore Dashboard",
  description: "Product Explore Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased`}
      >
        <FavoritesProvider>
          {children}
        </FavoritesProvider>
      </body>
    </html>
  );
}
