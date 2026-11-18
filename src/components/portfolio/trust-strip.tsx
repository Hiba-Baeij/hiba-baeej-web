import Image from "next/image";

import { Marquee } from "@/components/ui/marquee";

type Brand =
  | { name: string; logo: string; width: number; height: number }
  | { name: string; logo?: undefined };

// Logos live in /public/logo/brands. Use the dark-background variant of each.
// Brands without a logo yet fall back to a text label.
const brands: Brand[] = [
  { name: "Nirrov", logo: "/logo/brands/nirrov-on-dark.svg", width: 910, height: 232 },
  { name: "ASAPI ERP", logo: "/logo/brands/asapi.svg", width: 510, height: 85 },
  { name: "Safeer Digital", logo: "/logo/brands/safeer-digital.svg", width: 300, height: 72 },
  { name: "e-Dukan", logo: "/logo/brands/e-dukan-mark.svg", width: 152, height: 60 },
  { name: "Mind Torches" },
  { name: "JetOrder", logo: "/logo/brands/jetorder.png", width: 95, height: 40 },
  { name: "ELKOOD", logo: "/logo/brands/elkood.png", width: 423, height: 168 },
  { name: "Voucher Buyer", logo: "/logo/brands/voucher-buyer-mark.svg", width: 128, height: 40 },
  { name: "Iqraa Dashboard", logo: "/logo/brands/iqra-mark.svg", width: 587, height: 167 },
];

export const TrustStrip = () => {
  return (
    <section className="border-y border-line py-8" aria-label="Companies and products">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-5 px-5 md:flex-row md:gap-10 md:px-6">
        <p className="shrink-0 font-mono text-[11px] uppercase tracking-[0.14em] text-fg-subtle md:max-w-[200px]">
          Companies and products I've worked on
        </p>
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
          <Marquee pauseOnHover className="items-center [--duration:40s] [--gap:3.5rem]">
            {brands.map((b) =>
              b.logo ? (
                <Image
                  key={b.name}
                  src={b.logo}
                  alt={b.name}
                  title={b.name}
                  width={b.width}
                  height={b.height}
                  unoptimized
                  className="h-8 w-auto max-w-[160px] object-contain opacity-60 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
                />
              ) : (
                <span
                  key={b.name}
                  className="whitespace-nowrap font-heading text-lg font-semibold text-[#8A92A2] transition-colors duration-300 hover:text-white"
                >
                  {b.name}
                </span>
              ),
            )}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
