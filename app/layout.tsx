import { Rajdhani } from "next/font/google";
import type { Metadata } from "next";

import Nav from "@/components/Nav";

import "./globals.css";

const gFont = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "FCC Calculator",
  description:
    "A simple calculator for basic arithmetic operations, featuring a user-friendly interface with input validation, keyboard support, and clear display of current calculations.",
  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${gFont.className} bg-gradient-to-tr  from-violet-900`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
