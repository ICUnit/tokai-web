import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { LangProvider } from "@/contexts/lang";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["600", "700"],
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
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LangProvider>
          {children}
        </LangProvider>
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
