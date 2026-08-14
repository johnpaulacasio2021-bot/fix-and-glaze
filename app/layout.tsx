import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BRAND } from "@/lib/constants";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fix and Glaze | Expert Glass Repair & Installation | Windows, Doors & More",
  description:
    "Professional glass repair, installation, and glazing services for homes and businesses. UPVC, aluminium & timber specialists. Call 0432 800 802 for a free quote.",
  keywords: [
    "glass repair",
    "window installation",
    "door installation",
    "glazing contractor",
    "glass replacement",
  ],
  authors: [{ name: "Fix and Glaze" }],
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://fixandglaze.com.au",
    siteName: "Fix and Glaze",
    title: "Fix and Glaze | Expert Glass Repair & Installation",
    description: BRAND.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
