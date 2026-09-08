import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/lib/site";
import { MotionEffects } from "@/components/MotionEffects";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: `${siteConfig.name} — ${siteConfig.title}`, template: `%s — ${siteConfig.name}` },
  description: siteConfig.description,
  keywords: ["QA Engineer", "Software Tester", "Quality Assurance", "Test Automation", "Manual Testing"],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: `${siteConfig.name} — ${siteConfig.title}`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${siteConfig.name}, QA Engineer` }],
  },
  twitter: { card: "summary_large_image", title: `${siteConfig.name} — ${siteConfig.title}`, description: siteConfig.description, images: ["/opengraph-image"] },
  icons: { icon: "/icon.svg" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#071b19" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><MotionEffects/>{children}</body></html>;
}
