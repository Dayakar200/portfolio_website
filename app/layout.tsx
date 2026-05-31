import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Dr. John Doe | Data Scientist & AI/ML Engineer",
  description: "Portfolio of Dr. John Doe, Data Scientist and AI/ML Engineer with 5+ years of experience.",
  openGraph: {
    title: "Dr. John Doe | Data Scientist & AI/ML Engineer",
    description: "Portfolio of Dr. John Doe, Data Scientist and AI/ML Engineer with 5+ years of experience.",
    images: [{ url: "/placeholder-og.jpg", width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
