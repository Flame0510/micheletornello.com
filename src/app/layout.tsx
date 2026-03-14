import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Michele Tornello | Product Engineer",
  description: "Michele Tornello - Product Engineer | Full-Stack & System Architecture | Docente Steve Jobs Academy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className="scroll-smooth">
      <body className={`${geistSans.variable} font-sans antialiased bg-background text-text-main`}>
        {children}
      </body>
    </html>
  );
}
