import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tokai — BCI-Powered Focus for ADHD",
  description:
    "Tokai fuses EEG brain-computer interface data with agentic AI to help neurodivergent minds focus, plan, and perform.",
  openGraph: {
    title: "Tokai — BCI-Powered Focus for ADHD",
    description:
      "Real-time neural telemetry meets agentic AI. Designed for neurodivergent minds.",
    siteName: "Tokai",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
