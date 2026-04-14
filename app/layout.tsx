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
  themeColor: "#155e6a",
};

export const metadata: Metadata = {
  title: "Stay West Palm — Local Guide",
  description: "Your curated local guide for West Palm Beach — restaurants, hidden gems, nightlife, and insider tips from your host.",
  openGraph: {
    title: "Stay West Palm — Local Guide",
    description: "Curated restaurants, hidden gems, nightlife, and insider tips for your stay in West Palm Beach.",
    type: "website",
    locale: "en_US",
    url: "https://www.staywestpalm.now",
    siteName: "Stay West Palm",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stay West Palm — Local Guide",
    description: "Curated restaurants, hidden gems, nightlife, and insider tips for your stay in West Palm Beach.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={playfair.variable}>
      <body>{children}</body>
    </html>
  );
}