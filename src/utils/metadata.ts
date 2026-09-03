import { Metadata } from "next";
import { siteConfig } from "@/constants/portfolio";

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
} = {}): Metadata => ({
    title,
    description,
    icons,
    metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000"),
    openGraph: {
        title,
        description,
        url: process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
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
});
