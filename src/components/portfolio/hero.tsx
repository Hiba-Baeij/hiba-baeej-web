import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import { Spotlight } from "@/components/ui/spotlight-new";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { siteConfig } from "@/constants/portfolio";
import { ProjectVisual } from "./visuals";

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden" id="home">
      <Spotlight />
      <BackgroundBeams />
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-4 pt-24 pb-16 md:px-8 md:pt-32 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl text-center lg:text-left">
          <p className="text-xs font-medium uppercase tracking-widest text-[#3b82f6]">
            Senior Frontend &amp; Full-Stack Engineer
          </p>
          <TextGenerateEffect
            words={siteConfig.headline}
            className="mt-6 text-4xl font-semibold leading-tight text-white md:text-6xl"
            duration={0.6}
          />
          <p className="mt-6 text-base text-white/60 md:text-lg">{siteConfig.supporting}</p>
          <p className="mt-4 text-sm text-white/40">{siteConfig.techLine.join(" · ")}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <MovingBorderButton
              as="a"
              href="/#work"
              borderRadius="1.75rem"
              containerClassName="h-12 w-auto"
              className="px-6"
            >
              View My Work
            </MovingBorderButton>
            <Link href={siteConfig.linkedinUrl}>
              <Button size="lg" variant="outline">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
        <div className="mt-12 w-full max-w-lg lg:mt-0">
          <ProjectVisual kind="erp" className="shadow-[0_0_80px_rgba(59,130,246,0.15)]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;