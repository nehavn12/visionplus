import type { Metadata } from "next";
import { Baskervville } from "next/font/google";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
