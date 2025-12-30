import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Пять Букв — русская игра в слова",
    description:
        "Пять Букв — премиальная русская игра в слова. Вход через Google и VK ID. Ежедневные слова и тематические категории.",
    metadataBase: new URL("https://pyatbukv.ru"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ru">
        <body>{children}</body>
        </html>
    );
}
