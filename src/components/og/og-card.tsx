import { siteConfig } from "@/constants/portfolio";

export const ogSize = { width: 1200, height: 630 };

const logoSvg = `<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="1.5" y="1.5" width="97" height="97" rx="24" fill="url(#a)" stroke="#FFFFFF" stroke-opacity="0.12" stroke-width="3"/><g stroke-linecap="round" stroke-linejoin="round" stroke-width="8"><path d="M30 26V74" stroke="#FBFCF8"/><path d="M48 26V74" stroke="#FBFCF8"/><path d="M30 62Q30 50 42 50H58A12 12 0 0 1 58 74H48" stroke="url(#b)"/></g><defs><linearGradient id="a" x1="0" y1="0" x2="117.5" y2="117.5" gradientUnits="userSpaceOnUse"><stop offset="0.1" stop-color="#03070F"/><stop offset="1" stop-color="#0B2A66"/></linearGradient><linearGradient id="b" x1="30" y1="50" x2="70" y2="74" gradientUnits="userSpaceOnUse"><stop stop-color="#FBFCF8"/><stop offset="1" stop-color="#6E9BFF"/></linearGradient></defs></svg>`;

export const logoDataUri = `data:image/svg+xml;base64,${Buffer.from(logoSvg).toString("base64")}`;

/** Social share card (1200×630) rendered by next/og. */
export const OgCard = ({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) => (
  <div
    style={{
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      padding: "72px 80px",
      background: "radial-gradient(ellipse 80% 70% at 50% 0%, #10275a 0%, #07080B 70%)",
      color: "#FBFCF8",
    }}
  >
    <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={logoDataUri} width={72} height={72} alt="" />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span style={{ fontSize: 30, fontWeight: 700 }}>{siteConfig.name}</span>
        <span style={{ fontSize: 22, color: "#9AA3B2" }}>{siteConfig.role}</span>
      </div>
    </div>
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <span style={{ fontSize: 24, color: "#6E9BFF", letterSpacing: 2, textTransform: "uppercase" }}>{eyebrow}</span>
      <span style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.1, letterSpacing: -1.5 }}>{title}</span>
      <span style={{ fontSize: 28, color: "#B4BCC8", lineHeight: 1.4 }}>
        {subtitle.length > 150 ? `${subtitle.slice(0, 147).trimEnd()}…` : subtitle}
      </span>
    </div>
  </div>
);
