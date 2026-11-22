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
import { getBaseUrl } from "@/utils/getBaseUrl";

const baseUrl = getBaseUrl();

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${baseUrl}/#website`,
      url: baseUrl,
      name: `${siteConfig.name} — ${siteConfig.role}`,
      description: siteConfig.description,
      inLanguage: "en",
      publisher: { "@id": `${baseUrl}/#person` },
    },
    {
      "@type": "ProfilePage",
      "@id": `${baseUrl}/#profile`,
      url: baseUrl,
      isPartOf: { "@id": `${baseUrl}/#website` },
      mainEntity: { "@id": `${baseUrl}/#person` },
    },
    {
      "@type": "Person",
      "@id": `${baseUrl}/#person`,
      name: siteConfig.name,
      url: baseUrl,
      image: `${baseUrl}/images/about/hiba-baeij.jpg`,
      jobTitle: siteConfig.role,
      description: siteConfig.description,
      email: siteConfig.emailAddress,
      address: { "@type": "PostalAddress", addressCountry: "SY" },
      alumniOf: { "@type": "CollegeOrUniversity", name: "University of Aleppo" },
      knowsLanguage: ["ar", "en"],
      knowsAbout: ["React", "Next.js", "Vue.js", "TypeScript", "NestJS", "Laravel", "PostgreSQL", "ERP", "SaaS", "RAG", "MCP"],
      sameAs: [siteConfig.githubUrl, siteConfig.linkedinUrl],
    },
  ],
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