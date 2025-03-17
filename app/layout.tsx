import type { Metadata } from "next";
import {monaSans} from '@/app/fonts'
import Footer from "./ui/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sports Store Landing",
  description: "This is an example of a landing page for an sports store",
  keywords: ['sports', 'gadgets', 'sports clothes']
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${monaSans.variable} antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
