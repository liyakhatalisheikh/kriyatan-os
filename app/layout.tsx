
import "./globals.css";
import type { Metadata } from "next";
import GoogleTagManager, { GoogleTagManagerNoScript } from "./components/GoogleTagManager";

export const metadata: Metadata = {
  title: "Kriyatan | The Creator CRM (Client Relationship Manager)",
  description: "The first CRM built for Indian Creators. Manage Brands, automate Contracts, and track Payments. Stop running your business on WhatsApp.",
  metadataBase: new URL('https://kriyatan.com'), // Replace with your actual domain
  openGraph: {
    title: 'Kriyatan | The Creator CRM',
    description: 'Manage Brands. Track Payments. Automate Contracts.',
    url: 'https://kriyatan.com',
    siteName: 'Kriyatan',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kriyatan | The Creator CRM',
    description: 'Manage Brands. Track Payments. Automate Contracts.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <GoogleTagManager />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body style={{ margin: 0, padding: 0, backgroundColor: '#f8fafc' }}>
        <GoogleTagManagerNoScript />
        {children}
      </body>
    </html>
  );
}
