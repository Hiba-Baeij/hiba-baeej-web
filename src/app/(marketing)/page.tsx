import Hero from "@/components/portfolio/hero";
import TrustStrip from "@/components/portfolio/trust-strip";
import Metrics from "@/components/portfolio/metrics";
import WhatIBuild from "@/components/portfolio/what-i-build";
import FeaturedProjects from "@/components/portfolio/featured-projects";
import AiSection from "@/components/portfolio/ai-section";
import Expertise from "@/components/portfolio/expertise";
import HowIWork from "@/components/portfolio/how-i-work";
import Experience from "@/components/portfolio/experience";
import About from "@/components/portfolio/about";
import GithubSection from "@/components/portfolio/github-section";
import Contact from "@/components/portfolio/contact";
import { siteConfig } from "@/constants/portfolio";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  jobTitle: siteConfig.role,
  description: siteConfig.description,
  sameAs: [siteConfig.githubUrl, siteConfig.linkedinUrl],
};

const HomePage = () => {
    return (
        <div className="w-full min-h-dvh pt-0">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <Hero />
            <TrustStrip />
            <Metrics />
            <WhatIBuild />
            <FeaturedProjects />
            <AiSection />
            <Expertise />
            <HowIWork />
            <Experience />
            <About />
            <GithubSection />
            <Contact />
        </div>
    )
};

export default HomePage