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
  title: "Adelaide MedTech Hackathon",
  description:
    "South Australia's premier student healthcare innovation hackathon.",
  keywords: [
    "Hackathon",
    "Healthcare",
    "Medicine",
    "Technology",
    "Innovation",
    "University of Adelaide",
    "Medical",
    "Engineering",
  ],
  authors: [
    {
      name: "Adelaide MedTech Hackathon",
    },
  ],
  icons: {
    icon: "/logos/logo-dark.png",
    shortcut: "/logos/logo-dark.png",
    apple: "/logos/logo-dark.png",
  },
  openGraph: {
    title: "Adelaide MedTech Hackathon",
    description:
      "Where Healthcare Meets Innovation.",
    url: "https://adlmedtech.com",
    siteName: "Adelaide MedTech Hackathon",
    locale: "en_AU",
    type: "website",
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
      <body>{children}</body>
    </html>
  );
}