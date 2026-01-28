import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";

export const metadata: Metadata = {
  title: "Mission Lawn Care | Veteran-Owned Lawn Service in Anderson, SC",
  description: "Professional lawn care services in Anderson, SC. Veteran-owned and operated. Lawn mowing, edging, trimming, leaf removal, and seasonal cleanup. Call (864) 940-6434 for a free estimate!",
  keywords: "lawn care, lawn mowing, landscaping, Anderson SC, veteran owned, lawn service, yard maintenance, leaf removal, edging, trimming",
  authors: [{ name: "Mission Lawn Care" }],
  openGraph: {
    title: "Mission Lawn Care | Veteran-Owned Lawn Service in Anderson, SC",
    description: "Professional lawn care services in Anderson, SC. Veteran-owned and operated. Call (864) 940-6434 for a free estimate!",
    url: "https://missionlawncare.com",
    siteName: "Mission Lawn Care",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mission Lawn Care | Anderson, SC",
    description: "Veteran-owned lawn care services. Professional, reliable, affordable.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://missionlawncare.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/mission-lawn-care-logo.png" />
        <meta name="theme-color" content="#2D5A27" />
        <meta name="geo.region" content="US-SC" />
        <meta name="geo.placename" content="Anderson" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingCallButton />
        
        {/* Structured Data for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Mission Lawn Care",
              "description": "Veteran-owned professional lawn care services in Anderson, SC",
              "url": "https://missionlawncare.com",
              "telephone": "(864) 940-6434",
              "email": "missionlawncare@yahoo.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Anderson",
                "addressRegion": "SC",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 34.5034,
                "longitude": -82.6501
              },
              "areaServed": {
                "@type": "City",
                "name": "Anderson, SC"
              },
              "priceRange": "$$",
              "openingHours": "Mo-Sa 07:00-19:00",
              "sameAs": [
                "https://maps.app.goo.gl/t7SG8NmSsDhKsago6"
              ]
            }),
          }}
        />
      </body>
    </html>
  );
}
