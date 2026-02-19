import type { Metadata } from "next";
import { Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Brian Pizzimenti | Full Stack Developer",
  description: "Modern & Unique React Portfolio for Brian Pizzimenti",
  keywords: ["Brian Pizzimenti", "Full Stack Developer", "React", "Next.js", "Node.js", "Python", "SQL", "AWS", "Handlebars.js", "HTML & CSS", "Tailwind CSS", "Git"],
  authors: [{ name: "Brian Pizzimenti", url: "https://brianpizzimenti.com" }],
  creator: "Brian Pizzimenti",
  publisher: "Brian Pizzimenti",
  openGraph: {
    title: "Brian Pizzimenti | Full Stack Developer",
    description: "Modern & Unique React Portfolio for Brian Pizzimenti",
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
