import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Uniksmart - Boost Nail Salon Revenue",
  description:
    "Smart, hands-on marketing for nail shops and salon chains. We help nail salon owners grow foot traffic, fill appointment slots, and increase average spend.",
  keywords: [
    "nail salon marketing",
    "salon marketing",
    "nail shop",
    "photobooth",
    "local ads",
    "booking system",
  ],
  authors: [{ name: "Uniksmart" }],
  openGraph: {
    title: "Uniksmart - Boost Nail Salon Revenue",
    description:
      "Smart, hands-on marketing for nail shops and salon chains.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body
        className={`${inter.variable} ${montserrat.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
