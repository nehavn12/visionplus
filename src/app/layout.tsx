import type { Metadata } from "next";
import { Baskervville } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/common/Footer";

/* Baskervville font – Figma font */
const baskervville = Baskervville({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vision Plus Healthcare",
  description: "Pharmaceutical manufacturing & franchise solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`
          ${baskervville.className}
          antialiased
          overflow-x-hidden
          min-h-screen
          bg-white
          text-black
        `}
      >
        <Navbar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
