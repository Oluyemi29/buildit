import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "@/component/Provider";
import Header from "@/component/header/Header";
import Footer from "@/component/footer/footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
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
    <html lang="en" className={inter.className}>
      <body className={inter.className}>
        <Provider>
          <Header />
          <div className="mt-14">{children}</div>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
