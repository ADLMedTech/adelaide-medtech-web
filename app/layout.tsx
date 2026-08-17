import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export const metadata: Metadata = {
  title: "Adelaide MedTech Hackathon | Innovating Healthcare",
  description:
    "South Australia's premier student healthcare innovation hackathon. Tackle real-world medical challenges.",
  keywords: [
    "Hackathon",
    "Healthcare",
    "Medicine",
    "Technology",
    "Innovation",
    "University of Adelaide",
    "Adelaide University",
    "Medical",
    "Engineering",
    "Adelaide",
    "South Australia"
  ],
  authors: [
    { name: "Adelaide MedTech Hackathon Club" },
    { name: "Muhammad Ahmad", url: "https://adelaidemedtech.com" }
  ],
  icons: {
    icon: "/logos/logo-dark.png",
    shortcut: "/logos/logo-dark.png",
    apple: "/logos/logo-dark.png",
  },
  openGraph: {
    title: "Adelaide MedTech Hackathon",
    description: "Where Healthcare Meets Innovation.",
    url: "https://adelaidemedtech.com",
    siteName: "Adelaide MedTech Hackathon",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "https://adelaidemedtech.com/logos/logo-dark.png", 
        width: 1200,
        height: 630,
        alt: "Adelaide MedTech Hackathon Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "Adelaide MedTech Hackathon",
                "url": "https://adelaidemedtech.com/",
                "creator": {
                  "@type": "Person",
                  "name": "Muhammad Ahmad",
                  "jobTitle": "Media Director & Developer"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "Event",
                "name": "Adelaide MedTech Hackathon 2026",
                "url": "https://adelaidemedtech.com/",
                "startDate": "2026-08-19T09:00",
                "endDate": "2026-08-22T17:00",
                "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
                "location": {
                  "@type": "Place",
                  "name": "Adelaide",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Adelaide",
                    "addressRegion": "SA",
                    "addressCountry": "AU"
                  }
                },
                "description": "South Australia's premier student healthcare innovation hackathon.",
                "organizer": {
                  "@type": "Organization",
                  "name": "Adelaide MedTech Hackathon Club",
                  "url": "https://adelaidemedtech.com/"
                }
              }
            ])
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}