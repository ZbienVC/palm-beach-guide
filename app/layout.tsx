// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Palm Beach Local Guide",
  description: "Your curated local guide — food, activities, and hidden gems in Palm Beach, FL",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#fdfaf5" />
      </head>
      <body>{children}</body>
    </html>
  );
}
