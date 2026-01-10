import React from 'react';
import Navbar from '@components/header/Navbar';
import Footer from '@components/footer/footer';
import StickySocials from '@components/ui/stickySocials';
import StickyBookBtn from '@components/ui/StickyBookBtn';
import ExitIntentModal from '@components/ui/ExitIntentModal';
import type { Metadata, Viewport } from "next";
import "@app/globals.css";
import { UserProvider } from '@context/UserContext';

// 1. Viewport Configuration (Mobile Optimization)
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0F1012', // Matches your dark theme bg
};

// 2. SEO & AI Metadata
export const metadata: Metadata = {
  metadataBase: new URL('https://www.bamidele-sons.com'), // Replace with actual domain
  title: {
    default: "Bamidele & Sons | Premier Architectural Metalworks Nigeria",
    template: "%s | Bamidele & Sons"
  },
  description: "Direct importers and fabricators of luxury stainless steel, tempered glass, and wrought iron. Servicing Abuja, Lagos, and Port Harcourt with global-standard logistics.",
  keywords: ["Stainless Steel Abuja", "Luxury Railings Nigeria", "Architectural Glass", "B2B Steel Import", "Bamidele Metalworks", "Tempered Glass Facades"],
  authors: [{ name: "Bamidele & Sons" }],
  creator: "Bamidele & Sons",
  publisher: "Bamidele & Sons",
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
  // OpenGraph = How it looks when shared on WhatsApp/Facebook/LinkedIn
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://www.bamidele-sons.com",
    title: "Bamidele & Sons | Global Standard Metal Fabrication",
    description: "Upgrade your project with direct-import stainless steel and precision fabrication. Residential & Commercial services.",
    siteName: "Bamidele & Sons Metal Steel World",
    images: [
      {
        url: '/og-image.jpg', // You should create this image in your public folder
        width: 1200,
        height: 630,
        alt: "Bamidele & Sons Luxury Metalworks",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bamidele & Sons | Metalworks",
    description: "The intersection of global logistics and local craftsmanship.",
    images: ['/og-image.jpg'], // Same image as above
  },
  // Geo-Tags for Local SEO (Crucial for "Near Me" searches in Abuja)
  other: {
    "geo.region": "NG-FC", // Nigeria - Federal Capital Territory
    "geo.placename": "Abuja",
    "geo.position": "9.0765;7.3986", // Abuja Coordinates
    "ICBM": "9.0765, 7.3986"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  // 3. Structured Data (JSON-LD) for AI Search Engines
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor", // AI categorizes you here
    "name": "Bamidele & Sons Metal Steel World",
    "image": "https://www.bamidele-sons.com/og-image.jpg",
    "description": "Premier architectural metal fabrication company specializing in direct importation and installation of stainless steel and glass systems.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Plot 45, Industrial Layout",
      "addressLocality": "Idu",
      "addressRegion": "Abuja",
      "postalCode": "900108",
      "addressCountry": "NG"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 9.0765,
      "longitude": 7.3986
    },
    "url": "https://www.bamidele-sons.com",
    "telephone": "+2348002264335", // Ensure this matches your contact
    "priceRange": "$$$", // Signals 'Luxury' to search engines
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "14:00"
      }
    ],
    "sameAs": [
      "https://www.instagram.com/bamidele_sons",
      "https://www.linkedin.com/company/bamidele-sons"
    ]
  };

  return (
    <html lang="en" className="dark"> 
      <head>
        {/* Inject JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <UserProvider>
          <Navbar />
          {children}
          <Footer />
          <StickySocials />
          
          {/* Conversion Elements */}
          <StickyBookBtn />
          <ExitIntentModal />
          
        </UserProvider>
      </body>
    </html>
  );
}