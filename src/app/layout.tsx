import { base, heading, mono } from "@/constants";
import "@/styles/globals.css";
import { cn, generateMetadata } from "@/utils";
import Providers from "@/components/global/providers";

export const metadata = generateMetadata();

export const viewport = {
    themeColor: "#060813",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={cn(
                    "min-h-dvh bg-background text-foreground font-base antialiased overflow-x-hidden dark",
                    base.variable,
                    heading.variable,
                    mono.variable,
                )}
            >
                <Providers>{children}</Providers>
            </body>
        </html>
    );
};
