import type { Metadata, Viewport } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import StructuredData from './components/StructuredData.js';

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
  metadataBase: new URL('https://rajpalaceandconvention.com'),
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
    icon: '/images/image.png',
    apple: '/images/image.png',
    shortcut: '/images/image.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rajpalaceandconvention.com',
    siteName: 'Raj Palace & Convention',
    title: 'Raj Palace & Convention | Premier Wedding & Event Venue',
    description: 'Your premier destination for weddings, corporate events, and special occasions. Luxury venues, professional services, and unforgettable experiences.',
    images: [
      {
        url: '/images/image.png',
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
    images: ['/images/image.png'],
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

// Organization structured data
const organizationData = {
  '@type': 'LocalBusiness',
  name: 'Raj Palace & Convention',
  url: 'https://rajpalaceandconvention.com',
  logo: 'https://rajpalaceandconvention.com/images/image.png',
  description: 'Premier wedding and event venue offering luxury facilities and professional services.',
  image: 'https://rajpalaceandconvention.com/images/optimized/wedding_stage.jpg',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Your Street Address',
    addressLocality: 'Your City',
    addressRegion: 'Your State',
    postalCode: 'Your Postal Code',
    addressCountry: 'IN'
  }
};

// Website structured data
const websiteData = {
  '@type': 'WebSite',
  name: 'Raj Palace & Convention',
  url: 'https://rajpalaceandconvention.com',
  description: 'Premier wedding and event venue offering luxury facilities and professional services.',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://rajpalaceandconvention.com/search?q={search_term_string}'
    },
    'query-input': 'required name=search_term_string'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${montserrat.variable}`}>
      <head>
        <link rel="icon" href="/images/image.png" />
        <link rel="apple-touch-icon" href="/images/image.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <StructuredData type="LocalBusiness" data={organizationData} />
        <StructuredData type="WebSite" data={websiteData} />
      </head>
      <body className={`${montserrat.className} antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
