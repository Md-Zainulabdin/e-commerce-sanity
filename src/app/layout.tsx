import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import CartProvider from "@/components/Providers";
import ShoppingCartModal from "@/components/ShoppingCartModal";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Ecommerce",
  description: "Explore a World of Cutting-Edge Tech",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <Navbar />
          <ShoppingCartModal />
          <main className="px-4 sm:px-6 md:px-16">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
