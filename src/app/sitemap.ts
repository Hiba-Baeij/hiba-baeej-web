import { MetadataRoute } from "next";
import { projects } from "@/constants/portfolio";
import { getBaseUrl } from "@/utils/getBaseUrl";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getBaseUrl();
  const workRoutes = projects.map((p) => ({
    url: `${baseUrl}/work/${p.slug}`,
    lastModified: new Date(),
  }));

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/work`, lastModified: new Date() },
    ...workRoutes,
  ];
}