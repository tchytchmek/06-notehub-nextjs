import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import TanstackProvider from "@/components/TanstackProvider/TanstackProvider";


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <TanstackProvider>
        <Header/>
        <main>
        {children}
        </main>
        <Footer />
        </TanstackProvider>
      </body>
    </html>
  );
}
