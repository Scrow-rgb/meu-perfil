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
    default: "CAIO.LAB — Programação e Redes",
    template: "%s | CAIO.LAB",
  },
  description:
    "Portfólio de Caio, estudante de Engenharia de Computação, técnico de redes e freelancer em programação.",
  keywords: [
    "Caio",
    "Freelancer em Programação",
    "Técnico de Redes",
    "Engenharia de Computação",
    "Next.js",
    "React",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Caio" }],
  creator: "Caio",
  openGraph: {
    title: "CAIO.LAB — Programação e Redes",
    description:
      "Sites, automações e soluções web criadas por um estudante de Engenharia de Computação que também atua com redes.",
    url: "https://caio.dev",
    siteName: "CAIO.LAB",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CAIO.LAB — Programação e Redes",
    description:
      "Portfólio de projetos freelance, estudos em Engenharia de Computação e atuação técnica em redes.",
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
