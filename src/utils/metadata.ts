import { Metadata } from "next";
import { siteConfig } from "@/constants/portfolio";
import { getBaseUrl } from "./getBaseUrl";

/**
 * Shared page metadata.
 * - `path` sets the canonical URL and og:url for the page (e.g. "/work/asapi-erp").
 * - OG/Twitter images come from the `opengraph-image.tsx` files in `src/app`,
 *   so pass `image` only to override them.
 * - Favicon and apple touch icon come from `src/app/icon.svg` and `src/app/apple-icon.tsx`;
 *   pass `icons` only to override them.
 */
export const generateMetadata = ({
    title = `${siteConfig.name} — ${siteConfig.role}`,
    description = siteConfig.description,
    path = "/",
    type = "website",
    image = null,
    icons,
    noIndex = false
}: {
    title?: string;
    description?: string;
    path?: string;
    type?: "website" | "article" | "profile";
    image?: string | null;
    icons?: Metadata["icons"];
    noIndex?: boolean;
} = {}): Metadata => {
    const baseUrl = getBaseUrl();
    return {
    title,
    description,
    ...(icons && { icons }),
    metadataBase: new URL(baseUrl),
    alternates: {
        canonical: path,
    },
    openGraph: {
        title,
        description,
        url: path,
        type,
        siteName: siteConfig.name,
        locale: "en_US",
        ...(image && { images: [image] }),
    },
    twitter: {
        card: "summary_large_image",
        title,
        description,
        ...(image && { images: [image] }),
    },
    ...(noIndex && { robots: { index: false, follow: false } }),
    };
};
