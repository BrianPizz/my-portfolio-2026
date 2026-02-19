import type { Metadata, Viewport } from "next";
import { Syne } from "next/font/google";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://brianpizzimenti.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Brian Pizzimenti | Full Stack Developer",
    template: "%s | Brian Pizzimenti",
  },
  description:
    "Full stack developer portfolio. React, Next.js, Node.js, Python & SQL. Projects, resume, and contact.",
  keywords: [
    "Brian Pizzimenti",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "SQL",
    "MongoDB",
    "portfolio",
    "web developer",
  ],
  authors: [{ name: "Brian Pizzimenti", url: siteUrl }],
  creator: "Brian Pizzimenti",
  publisher: "Brian Pizzimenti",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Brian Pizzimenti",
    title: "Brian Pizzimenti | Full Stack Developer",
    description:
      "Full stack developer portfolio. React, Next.js, Node.js, Python & SQL. Projects, resume, and contact.",
    locale: "en_US",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Brian Pizzimenti - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brian Pizzimenti | Full Stack Developer",
    description:
      "Full stack developer portfolio. React, Next.js, Node.js, Python & SQL.",
    images: ["/og.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [
      { url: "/icon.svg", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark.svg", media: "(prefers-color-scheme: dark)" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={syne.variable}>
      <body className="font-sans antialiased min-h-full">
        {children}
      </body>
    </html>
  );
}
