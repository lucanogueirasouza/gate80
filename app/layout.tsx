import type { Metadata } from "next";
import { Manrope, Press_Start_2P } from "next/font/google";
import "./globals.css";
import { siteConfig } from "./siteConfig";
import { VLibrasWidget } from "./components/VLibrasWidget";
import { ThemeProvider } from "./components/ThemeProvider";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const pressStart = Press_Start_2P({
  variable: "--font-press-start",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  icons: {
    icon: "/Logo-enderecamento/Logo%20endere%C3%A7amento.png",
    shortcut: "/Logo-enderecamento/Logo%20endere%C3%A7amento.png",
    apple: "/Logo-enderecamento/Logo%20endere%C3%A7amento.png",
  },
  title: {
    default: `Gate80 Co. | ${siteConfig.title}`,
    template: "Gate80 Co. | %s",
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  openGraph: {
    title: `Gate80 Co. | ${siteConfig.title}`,
    description: siteConfig.description,
    url: siteConfig.domain,
    siteName: siteConfig.name,
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/logosite/gate80 logo site.png",
        width: 1200,
        height: 630,
        alt: "Gate80",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Gate80 Co. | ${siteConfig.title}`,
    description: siteConfig.description,
    images: ["/logosite/gate80 logo site.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${manrope.variable} ${pressStart.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          {children}
          <VLibrasWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
