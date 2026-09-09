import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import TopNavbar from "./components/top-navbar";
import Footer from "./components/footer";
 
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Paving Risers for Grates in NY | Paving Risers",
    template: "%s | Paving Risers",
  },
  description: "Paving Risers for Grates in NY offer durable, precision-engineered risers for manholes, catch basins and grates, built for safe, reliable roadwork.",
  metadataBase: new URL('https://www.pavingrisers.com'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/favicon.png`,
    apple: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/favicon.png`,
  },
  openGraph: {
    title: 'Paving Risers for Grates in NY',
    description: 'Paving Risers for Grates in NY offer durable, precision-engineered risers for manholes, catch basins and grates, built for safe, reliable roadwork.',
    url: 'https://www.pavingrisers.com',
    siteName: 'Paving Risers',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/favicon.png`,
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Paving Risers',
    description: 'Heavy-duty adjustment rings and paving access solutions.',
    images: [`${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/favicon.png`],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <head>
        <meta name="copyright" content="www.pavingrisers.com" />
        <meta name="document-distribution" content="Global" />
        <meta name="language" content="EN" />
        <meta name="copyright" content="www.pavingrisers.com" />
        <meta name="copyright" content="pavingrisers" />
        <meta name="Distribution" content="Global" />
        <meta name="Robots" content="INDEX,FOLLOW" />
        <meta name="keywords" content="paving risers for grates in NY, paving risers Alabama, paving risers Alaska, paving risers Arizona, paving risers Arkansas, paving risers California, paving risers Colorado, paving risers Connecticut, paving risers Delaware, paving risers Florida, paving risers Georgia, paving risers Hawaii, paving risers Idaho, paving risers Illinois, paving risers Indiana, paving risers Iowa, paving risers Kansas, paving risers Kentucky, paving risers Louisiana, paving risers Maine, paving risers Maryland, paving risers Massachusetts, paving risers Michigan, paving risers Minnesota, paving risers Mississippi, paving risers Missouri, paving risers Montana, paving risers Nebraska, paving risers Nevada, paving risers New Hampshire, paving risers New Jersey, paving risers New Mexico, paving risers New York, paving risers North Carolina, paving risers North Dakota, paving risers Ohio, paving risers Oklahoma, paving risers Oregon, paving risers Pennsylvania, paving risers Rhode Island, paving risers South Carolina, paving risers South Dakota, paving risers Tennessee, paving risers Texas, paving risers Utah, paving risers Vermont, paving risers Virginia, paving risers Washington, paving risers West Virginia, paving risers Wisconsin, paving risers Wyoming, paving risers Ontario, paving risers Quebec, paving risers British Columbia, paving risers Alberta, paving risers Manitoba, paving risers Saskatchewan, paving risers Nova Scotia, paving risers New Brunswick, paving risers Newfoundland and Labrador, paving risers Prince Edward Island, paving risers Northwest Territories, paving risers Yukon, paving risers Nunavut, cast iron risers for manholes, extension rings for manhole covers, valve box risers, curb box extensions, risers for curb inlets, adjustable manhole risers, expandable manhole risers, paving risers for NYC, paving risers for Boston, paving risers for DOT, best paving risers, ultimate paving risers, risers for cleanouts, risers for catch basins, risers for gas test, risers for valve boxes, risers for curb boxes, risers for nyc manholes, risers for nyc catch basins, riser rings, riser rings for manholes, riser rings for catch basins, adjustable riser rings, expandable riser rings, adjustable paving risers, paving risers for manholes, paving risers for manhole covers, paving risers for curb inlets" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "WebSite",
              "name": "pavingrisers",
              "url": "https://www.pavingrisers.com/",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "{search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-YC2WWN2W20" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-YC2WWN2W20');
            `
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden w-full relative`}
      >
        <TopNavbar />
        <Navbar />
        {children} 
        <Footer />
      </body>
    </html>
  );
}