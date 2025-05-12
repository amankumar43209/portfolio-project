import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/main/navbar";
import { Footer } from "@/components/main/footer";
import StarsCanvas from "@/components/main/star-background";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aman's portfolio",
  description: "This is my portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas/>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
