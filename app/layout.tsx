import type { Metadata, Viewport } from "next";
import { Syne } from "next/font/google";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#15181e",
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
        url: `${siteUrl}/opengraph-image`,
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
    images: [`${siteUrl}/opengraph-image`],
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

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Brian Pizzimenti | Full Stack Developer",
      description:
        "Full stack developer portfolio. React, Next.js, Node.js, Python & SQL. Projects, resume, and contact.",
      publisher: { "@id": `${siteUrl}/#person` },
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Brian Pizzimenti",
      jobTitle: "Full Stack Developer",
      url: siteUrl,
      description:
        "Full-stack developer. React, Node, Python, SQL. Orlando, FL. Open to full-time and contract opportunities.",
      sameAs: [
        "https://www.linkedin.com/in/brian-pizzimenti-b1a53929a/",
        "https://github.com/BrianPizz",
      ],
      knowsAbout: [
        "React",
        "Next.js",
        "Node.js",
        "Python",
        "SQL",
        "JavaScript",
        "TypeScript",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={syne.variable}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
