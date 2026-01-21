import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const eunjin = localFont({
  src: "../public/fonts/eunjin/Eunjin.ttf",
  variable: "--font-eunjin",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Drawi",
  description: "Drawi Landing Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${eunjin.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
