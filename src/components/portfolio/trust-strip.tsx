import { Marquee } from "@/components/ui/marquee";

const companies = [
  "Nirrov",
  "ASAPI ERP",
  "Safeer Digital",
  "Mind Torches",
  "JetOrder",
  "ELKOOD",
  "e-Dukan",
  "SmartDocs AI",
  "Voucher Buyer",
  "Iqraa Dashboard",
];

export const TrustStrip = () => {
  return (
    <section className="border-y border-line py-8" aria-label="Companies and products">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-5 px-5 md:flex-row md:gap-10 md:px-6">
        <p className="shrink-0 font-mono text-[11px] uppercase tracking-[0.14em] text-fg-subtle md:max-w-[200px]">
          Experience across enterprise teams and products
        </p>
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
          <Marquee pauseOnHover className="[--duration:40s] [--gap:3rem]">
            {companies.map((c) => (
              <span key={c} className="whitespace-nowrap font-heading text-lg font-semibold text-[#8A92A2]">
                {c}
              </span>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
