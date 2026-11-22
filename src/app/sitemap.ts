import { MetadataRoute } from "next";
import { projects } from "@/constants/portfolio";
import { getBaseUrl } from "@/utils/getBaseUrl";

// A fixed date: `new Date()` would change on every build and teach crawlers to ignore lastmod.
// Bump this when the content actually changes.
const LAST_UPDATED = new Date("2026-11-22");

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getBaseUrl();
  const workRoutes = projects.map((p) => ({
    url: `${baseUrl}/work/${p.slug}`,
    lastModified: LAST_UPDATED,
    changeFrequency: "yearly" as const,
    priority: 0.7,
  }));

  return [
    { url: baseUrl, lastModified: LAST_UPDATED, changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/work`, lastModified: LAST_UPDATED, changeFrequency: "monthly", priority: 0.8 },
    ...workRoutes,
  ];
}