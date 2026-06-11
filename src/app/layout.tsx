import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import type { ReactNode } from "react";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { MouseTrail } from "@/components/ui/mouse-trail";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://caio.dev"),
  title: {
    default: "DEV.SOLO — Caio | Full Stack Developer",
    template: "%s | DEV.SOLO",
  },
  description:
    "Portfolio profissional de Caio, desenvolvedor Full Stack especializado em Next.js, automação, APIs e aplicações web escaláveis.",
  keywords: [
    "Caio",
    "Full Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Caio" }],
  creator: "Caio",
  openGraph: {
    title: "DEV.SOLO — Caio | Full Stack Developer",
    description:
      "Aplicações web modernas, automação e soluções escaláveis que conectam código e performance.",
    url: "https://caio.dev",
    siteName: "DEV.SOLO",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DEV.SOLO — Caio | Full Stack Developer",
    description:
      "Portfolio profissional de desenvolvedor Full Stack com foco em experiências digitais escaláveis.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A0A0A",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${jetBrainsMono.variable} dark`}
    >
      <body className="font-body-md antialiased">
        <Header />
        {children}
        <Footer />
        <MouseTrail />
      </body>
    </html>
  );
}
