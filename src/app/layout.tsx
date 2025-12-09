import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import JsonLD from "./components/JsonLD";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lost Secret: The Hidden Truth of Nalanda - Thriller Novel by Akash Pasricha",
  description: "Lost Secret is a captivating thriller that weaves ancient history with modern espionage. Follow Kabir and Reeya's thrilling journey across India as they uncover the mysteries of Nalanda.",
  keywords: "Lost Secret, Nalanda, thriller novel, Akash Pasricha, espionage, ancient history, Indian author",
  authors: [{ name: "Akash Pasricha" }],
  creator: "Akash Pasricha",
  publisher: "HubHawks",
  formatDetection: {
    email: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://akashpasricha.com",
    siteName: "Lost Secret - The Hidden Truth of Nalanda",
    title: "Lost Secret: The Hidden Truth of Nalanda",
    description: "A razor-sharp thriller that fuses ancient history with high-stakes espionage",
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "Lost Secret Book Cover",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lost Secret: The Hidden Truth of Nalanda",
    description: "A razor-sharp thriller that fuses ancient history with high-stakes espionage",
    images: ["/hero.png"],
  },
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
  verification: {
    google: "Pc8kPG0p5Bcs0uBNdg71q7Mtvl05XF7nUfyKj05zaAc",
  },
  alternates: {
    canonical: "https://akashpasricha.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <JsonLD />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
