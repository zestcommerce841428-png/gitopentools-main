import { Metadata } from "next";
import { defaultSEO } from "./seo.config";

interface GenerateMetadataProps {
    title: string;
    description: string;
    keywords: string;
    path: string;
    openGraph?: {
        title?: string;
        description?: string;
    };
    twitter?: {
        title?: string;
        description?: string;
    };
}

export function generateMetadata({
    title,
    description,
    keywords,
    path,
    openGraph,
    twitter,
}: GenerateMetadataProps): Metadata {
    const url = `${defaultSEO.baseUrl}${path}`;
    const openGraphTitle = openGraph?.title || title;
    const openGraphDescription = openGraph?.description || description;
    const twitterTitle = twitter?.title || openGraphTitle;
    const twitterDescription = twitter?.description || openGraphDescription;

    return {
        title: title,
        description: description,
        keywords: keywords,
        alternates: { canonical: url },
        openGraph: {
            title: openGraphTitle,
            description: openGraphDescription,
            url: url,
            siteName: defaultSEO.siteName,
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: twitterTitle,
            description: twitterDescription,
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
        icons: {
            icon: "/favicon/favicon.ico",
            shortcut: "/favicon/apple-touch-icon.png",
            apple: "/favicon/apple-touch-icon.png",
        },
        manifest: "/favicon/site.webmanifest",
        verification: {
            google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
        },
    };
}
