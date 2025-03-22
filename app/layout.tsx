import type { Metadata, Viewport } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

// Optimize font loading
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#8a2be2',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://rajpalace.com'),
  title: {
    default: 'Raj Palace & Convention | Premier Wedding & Event Venue',
    template: '%s | Raj Palace & Convention'
  },
  description: 'Raj Palace & Convention - Your premier destination for weddings, corporate events, and special occasions. Luxury venues, professional services, and unforgettable experiences.',
  keywords: ['wedding venue', 'convention center', 'event space', 'corporate events', 'wedding hall', 'party venue', 'luxury venue', 'Raj Palace'],
  authors: [{ name: 'Raj Palace & Convention' }],
  creator: 'Raj Palace & Convention',
  publisher: 'Raj Palace & Convention',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rajpalace.com',
    siteName: 'Raj Palace & Convention',
    title: 'Raj Palace & Convention | Premier Wedding & Event Venue',
    description: 'Your premier destination for weddings, corporate events, and special occasions. Luxury venues, professional services, and unforgettable experiences.',
    images: [
      {
        url: '/images/optimized/wedding_stage.jpg',
        width: 1200,
        height: 630,
        alt: 'Raj Palace Wedding Venue',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Raj Palace & Convention | Premier Wedding & Event Venue',
    description: 'Your premier destination for weddings, corporate events, and special occasions.',
    images: ['/images/optimized/wedding_stage.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${montserrat.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${montserrat.className} antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
