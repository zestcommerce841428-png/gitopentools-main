
import { Inter } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import { defaultSEO } from "@/lib/seo.config";
import { GoogleAnalytics } from '@next/third-parties/google'
import { Analytics } from "@vercel/analytics/next"


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: defaultSEO.title,
    template: "%s - GitOpen Tools"
  },
  description: defaultSEO.description,
  keywords: defaultSEO.keywords,
  authors: [{ name: "GitOpen Tools" }],
  icons: {
    icon: "/favicon/favicon.ico",
    shortcut: "/favicon/favicon-16x16.png",
    apple: "/favicon/apple-touch-icon.png",
  },
  manifest: "/favicon/site.webmanifest",
  openGraph: {
    title: defaultSEO.title,
    description: defaultSEO.description,
    type: "website",
    url: "https://www.gitopentools.com",
    images: "https://www.gitopentools.com/assets/logo_text.png"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: defaultSEO.title,
    description: defaultSEO.description,
    card: "summary_large_image",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="favicon/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="favicon/favicon.svg" />
        <link rel="shortcut icon" href="favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="GitOpenTools" />
        <link rel="manifest" href="favicon/site.webmanifest" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "GitOpenTools",
            "url": "https://www.gitopentools.com",
            "logo": "https://www.gitopentools.com/assets/logo.png"
          }),
        }}
      />
      <body className={inter.className}>
        <div className="scroll-indicator" id="scrollIndicator"></div>
        <section>
          {children}
        </section>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS || ""} />
        <Analytics />
      </body>
    </html>
  );
}
