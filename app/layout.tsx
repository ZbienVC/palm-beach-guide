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
  title: "Palm Beach Local Guide",
  description: "Your curated local guide — food, activities, and hidden gems in Palm Beach, FL",
  openGraph: {
    title: "Palm Beach Local Guide",
    description: "Curated restaurants, hidden gems, and local tips from your host.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Palm Beach Local Guide",
    description: "Curated restaurants, hidden gems, and local tips from your host.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={playfair.variable}>
      <body>{children}</body>
    </html>
  );
}