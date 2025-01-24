import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Rotaract DYPCOE",
  description: "Rotaract Club of D.Y. Patil College of Engineering - Empowering Youth Through Service & Leadership",
};

import { ScrollProvider } from "@/context/scrollContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <ScrollProvider>
        {children}
      </ScrollProvider>
      </body>
    </html>
  );
}
