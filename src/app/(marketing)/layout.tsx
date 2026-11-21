import SiteHeader from "@/components/portfolio/nav";
import Footer from "@/components/portfolio/footer";
import SiteSky from "@/components/portfolio/site-sky";
import { SkyProvider } from "@/components/portfolio/sky-context";

const MarketingLayout = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return (
        <SkyProvider>
            <SiteSky />
            <div className="relative min-h-dvh w-full">
                <a
                    href="#main"
                    className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-ink"
                >
                    Skip to content
                </a>
                <SiteHeader />
                <main id="main">{children}</main>
                <Footer />
            </div>
        </SkyProvider>
    );
};

export default MarketingLayout;
