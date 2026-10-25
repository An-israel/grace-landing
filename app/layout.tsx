import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import { site } from "@/site.config";
import "./globals.css";

const display = Fraunces({ subsets: ["latin"], variable: "--font-display", weight: ["500", "600", "700"] });
const body = Inter({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: `${site.name} | Learn affiliate marketing, honestly`,
  description:
    "Grace Digital Academy teaches beginners how affiliate marketing actually works, with honest, practical lessons on content creation, selling online and understanding your audience.",
  openGraph: {
    title: `${site.name}: learn affiliate marketing, honestly`,
    description: "Practical, beginner-friendly lessons in affiliate marketing and digital marketing. No hype, no shortcuts.",
  },
};

export const viewport: Viewport = { themeColor: "#ffffff" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
