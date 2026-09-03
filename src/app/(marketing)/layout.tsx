import PortfolioNav from "@/components/portfolio/nav";
import Footer from "@/components/portfolio/footer";

const MarketingLayout = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return (
        <main className="w-full relative min-h-dvh">
            {children}
            <Footer />
            <PortfolioNav />
        </main>
    );
};

export default MarketingLayout;