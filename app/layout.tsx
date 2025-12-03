import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Provider from "@/component/Provider";
import Header from "@/component/header/Header";
import Footer from "@/component/footer/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "BuildItLab",
    template: "%s | BuildItLab",
  },
  keywords: ["builditlab", "buildit", "tech", "tech company"],
  description:
    "BuilditLab is a software development studio helping startups and companies build modern digital products. From MVPs to full-scale applications, we bring your ideas to life with clean design, efficient development, and reliable execution",
  openGraph: {
    title: "BuildItLab",
    description:
      "BuilditLab is a software development studio helping startups and companies build modern digital products. From MVPs to full-scale applications, we bring your ideas to life with clean design, efficient development, and reliable execution",
    url: "https://buildit-virid-phi.vercel.app",
    siteName: "BuildItLab",
    images: {
      url: "/buildit-preview.PNG",
      width: 1200,
      height: 630,
      alt: "BuildItLab",
    },
    type: "website",
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
        <Provider>
          <Header />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
