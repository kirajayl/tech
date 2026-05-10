import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "1% Tech — AI Systems That Run Your Operations",
  description:
    "We solve the problems that hold your business back. AI-powered automation, custom platforms, and real-time analytics for Malaysian businesses.",
  keywords:
    "AI automation, business operations, custom platforms, analytics, Malaysia, 1% Club, 1% Tech",
  openGraph: {
    title: "1% Tech — The 1% That Changes Everything",
    description:
      "We solve the problems that hold your business back. AI-powered operations for Malaysian businesses.",
    type: "website",
    url: "https://tech.the1percentclub.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "1% Tech — The 1% That Changes Everything",
    description:
      "We solve the problems that hold your business back. AI-powered operations for Malaysian businesses.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}