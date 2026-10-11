import type { Metadata } from "next";
import { Inter, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/siteConfig";
import { RfqProvider } from "@/lib/rfqContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RfqDrawer } from "@/components/RfqDrawer";
import { MobileBottomDock } from "@/components/MobileBottomDock";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.name} | Stockist - SKF, TATA, XNO, DSF | Manmad`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.seoDescription,
  keywords: [
    "EZZI Bearing Suppliers",
    "bearing stockist manmad",
    "SKF bearings",
    "TATA bearings",
    "XNO bearings",
    "DSF bearings",
    "taper roller bearing",
    "ball bearing",
    "hand tools"
  ],
  authors: siteConfig.contacts.map((c) => ({ name: c.name })),
  creator: siteConfig.name,
  publisher: siteConfig.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteConfig.siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.siteUrl,
    title: `${siteConfig.name} | Stockist - SKF, TATA, XNO, DSF | Manmad`,
    description: siteConfig.seoDescription,
    siteName: siteConfig.name,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: `${siteConfig.name} - Bearing Suppliers Manmad`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Stockist - SKF, TATA, XNO, DSF | Manmad`,
    description: siteConfig.seoDescription,
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" }
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": siteConfig.name,
    "description": siteConfig.seoDescription,
    "url": siteConfig.siteUrl,
    "telephone": siteConfig.contacts.map(c => `+91${c.phone}`),
    "email": siteConfig.email,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.address,
      "addressLocality": "Manmad",
      "addressRegion": "Maharashtra",
      "postalCode": "423104",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 20.2544,
      "longitude": 74.4378
    },
    "areaServed": siteConfig.serviceArea,
    "brands": siteConfig.brands.map(b => ({
      "@type": "Brand",
      "name": b
    }))
  };

  return (
    <html lang="en" className={`${inter.variable} ${barlowCondensed.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased bg-[#F4F6FA] text-[#1A2536] selection:bg-[#C9962B] selection:text-white pb-16 md:pb-0 font-sans">
        <RfqProvider>
          <Header />
          <main className="flex-1 relative">
            {children}
          </main>
          <Footer />
          <RfqDrawer />
          <MobileBottomDock />
          <FloatingWhatsApp />
        </RfqProvider>
      </body>
    </html>
  );
}
