import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "../globals.css";
import Navigation from "@/components/shared/navigation/Navigation";
import Footer from "@/components/shared/footer/Footer";
import Hero from "@/components/home/hero/Hero";

const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-ubuntu",
  display: "swap", // Forbedrer performance
});

export const metadata: Metadata = {
  title: "Nightclub",
  description: "Experience the Ultimate Nightlife",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={ubuntu.variable}>
      <body className="font-ubuntu">
        <Hero />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
