import { Inter, JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";

// The variable file covers every weight (100-900), so the static Satoshi files are not loaded.
export const heading = localFont({
    src: "../../public/fonts/Satoshi-Variable.woff2",
    weight: "100 900",
    style: "normal",
    variable: "--font-heading",
});

export const base = Inter({
    subsets: ["latin"],
    variable: "--font-base",
});

export const mono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-mono",
    weight: ["400", "500"],
});
