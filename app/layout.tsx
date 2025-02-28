import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import { QueryProvider } from "@/providers/query-provider";
import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";

const font = Urbanist({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Store",
  description: "Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={font.className}
      >
        <QueryProvider>
        <ModalProvider />
        <ToastProvider />
        <Navbar />
        {children}
        <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}
