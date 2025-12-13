
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kriyatan | The Creator OS",
  description: "The professional OS for Indian Creators: Invoices, Contracts, and Media Kits.",
  metadataBase: new URL('https://kriyatan.com'), // Replace with your actual domain
  openGraph: {
    title: 'Kriyatan | The Creator OS',
    description: 'Professionalize your creative business.',
    url: 'https://kriyatan.com',
    siteName: 'Kriyatan',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kriyatan | The Creator OS',
    description: 'Professional tools for modern creators.',
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body style={{ margin: 0, padding: 0, backgroundColor: '#f8fafc' }}>
        {children}
      </body>
    </html>
  );
}
