import { Metadata } from "next";
import { siteConfig } from "@/constants/portfolio";
import { getBaseUrl } from "./getBaseUrl";

export const generateMetadata = ({
    title = `${siteConfig.name} — ${siteConfig.role}`,
    description = siteConfig.description,
    image = "/images/og-image.png",
    icons = [
        {
            rel: "apple-touch-icon",
            sizes: "32x32",
            url: "/icons/icon.svg",
        },
        {
            rel: "icon",
            sizes: "32x32",
            url: "/icons/icon.svg",
        },
    ],
    noIndex = false
}: {
    title?: string;
    description?: string;
    image?: string | null;
    icons?: Metadata["icons"];
    noIndex?: boolean;
} = {}): Metadata => {
    const baseUrl = getBaseUrl();
    return {
    title,
    description,
    icons,
    metadataBase: new URL(baseUrl),
    openGraph: {
        title,
        description,
        url: baseUrl,
        siteName: siteConfig.name,
        images: image ? [image] : [],
    },
    twitter: {
        card: "summary_large_image",
        title,
        description,
        images: image ? [image] : [],
    },
    ...(noIndex && { robots: { index: false, follow: false } }),
    };
};
