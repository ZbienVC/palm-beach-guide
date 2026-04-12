import type { Metadata, Viewport } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#0f5bba",
};

export const metadata: Metadata = {
  title: "West Palm Beach Local Guide",
  description: "Your curated local guide for West Palm Beach and Palm Beach — restaurants, hidden gems, and local tips from your host at 651 Okeechobee Blvd.",
  openGraph: {
    title: "West Palm Beach & Palm Beach Local Guide",
    description: "Curated restaurants, hidden gems, and local tips from your host at 651 Okeechobee Blvd.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "West Palm Beach & Palm Beach Local Guide",
    description: "Curated restaurants, hidden gems, and local tips from your host at 651 Okeechobee Blvd.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={playfair.variable}>
      <body>{children}</body>
    </html>
  );
}