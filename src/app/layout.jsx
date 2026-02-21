import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// app/layout.js ba page.js er upore thakbe

export const metadata = {
  title: {
    default: "Sadia | Full-Stack Developer & UI/UX Specialist",
    template: "%s | Sadia Portfolio",
  },
  description: "Sadia is a Full-Stack Developer specializing in high-end Next.js applications, GSAP animations, and scalable web systems. Crafting immersive digital experiences with pure performance.",
  keywords: [
    "Sadia",
    "Full-Stack Developer",
    "Next.js Developer Bangladesh",
    "UI/UX Specialist",
    "Creative Web Developer",
    "React Specialist",
    "GSAP Animation Expert",
    "Web Development Portfolio"
  ],
  authors: [{ name: "Sadia" }],
  creator: "Sadia",
  publisher: "Sadia",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  // Social Media Preview (Open Graph)
  openGraph: {
    title: "Sadia | Crafting Immersive Digital Experiences",
    description: "Full-Stack Developer dedicated to building high-end, scalable web systems using Next.js and GSAP.",
    url: "https://sadia-l.vercel.app/",
    siteName: "Sadia Portfolio",
    images: [
      {
        url: "/banner-image.png", // public folder-e ekti image rakhun jeta share korle dekhabe
        width: 1200,
        height: 630,
        alt: "Sadia Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Sadia | Full-Stack Developer",
    description: "Building high-performance web systems with Next.js and GSAP.",
    images: ["/og-image.jpg"],
    creator: "@sadia", // Apnar twitter handle thakle dite paren
  },
  // Search Engine Bot Settings
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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
