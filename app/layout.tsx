import type { Metadata, Viewport } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";

const display = Anton({ weight: "400", subsets: ["latin"], variable: "--font-display" });
const body = Inter({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "Grace The Marketer | YouTube & AI Automation",
  description:
    "Learn digital skills, use AI and build your income online. Join Grace's free WhatsApp community and learn YouTube automation step by step, even as a complete beginner.",
  openGraph: {
    title: "Turn your phone into a YouTube income skill, using AI",
    description: "Join the free WhatsApp community. Step-by-step YouTube automation for beginners.",
  },
};

export const viewport: Viewport = { themeColor: "#0a0a0a" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
