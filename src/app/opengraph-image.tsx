import { ImageResponse } from "next/og";
import { siteConfig } from "@/constants/portfolio";
import { OgCard, ogSize } from "@/components/og/og-card";

export const alt = `${siteConfig.name} — ${siteConfig.role}`;
export const size = ogSize;
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <OgCard
      eyebrow="ERP · SaaS · AI"
      title={siteConfig.headline}
      subtitle="Five years building ERP systems, SaaS products and AI apps with React, Vue, Next.js, NestJS and Laravel."
    />,
    size,
  );
}
