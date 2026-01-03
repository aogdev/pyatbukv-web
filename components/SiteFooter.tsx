// components/SiteFooter.tsx
import React from "react";
import Link from "next/link";

export default function SiteFooter() {
    return (
        <footer className="footerWrap">
            <div className="footerCard">
                <div className="footerRow">
                    <div className="small">© 2025 «Пять Букв»</div>

                    <nav className="footerNav" aria-label="Ссылки">
                        <Link href="/support">Поддержка</Link>
                        <Link href="/privacy">Политика конфиденциальности</Link>
                        <Link href="/terms">Условия использования</Link>
                        <Link href="/delete-account">Управление аккаунтом</Link>
                    </nav>
                </div>
            </div>
        </footer>
    );
}
