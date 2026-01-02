import type { Metadata } from "next";
import "./globals.css";

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { LINKS } from "@/config/links";

export const metadata: Metadata = {
    title: "Пять Букв",
    description: "Словесная игра на русском языке.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ru">
        <body>
        <div className="page">
            <div className="shell">
                <div className="container">
                    <SiteHeader rustoreHref={LINKS.RUSTORE} boostyHref={LINKS.BOOSTY} />
                    <main className="pageMain">{children}</main>
                    <SiteFooter />
                </div>
            </div>
        </div>
        </body>
        </html>
    );
}
