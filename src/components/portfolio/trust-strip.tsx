import { Marquee } from "@/components/ui/marquee";

const companies = ["Nirrov", "Mind Torches", "ELKOOD", "ASAPI ERP", "Safeer Digital", "Matrix ERP", "JetOrder"];

export const TrustStrip = () => {
  return (
    <section className="relative mx-auto w-full max-w-7xl px-4 py-10 md:px-8" aria-label="Experience">
      <p className="mb-6 text-center text-xs uppercase tracking-widest text-white/40">
        Experience across enterprise teams and products
      </p>
      <Marquee pauseOnHover className="[--duration:30s]">
        {companies.map((c) => (
          <span key={c} className="px-8 text-lg font-medium text-white/50">
            {c}
          </span>
        ))}
      </Marquee>
    </section>
  );
};

export default TrustStrip;