// components/SiteHeader.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

import BoostyButton from "@/components/buttons/BoostyButton";
import RuStoreButton from "@/components/buttons/RuStoreButton";

type Props = {
    rustoreHref?: string;
    boostyHref: string;
};

export default function SiteHeader({ rustoreHref = "#", boostyHref }: Props) {
    return (
        <header className="topbar">
            <Link className="brand" href="/" aria-label="Пять Букв — на главную">
                <Image
                    src="/logo.svg"
                    alt="Пять Букв"
                    width={180}
                    height={60}
                    priority
                    style={{ width: "auto", height: "auto", maxWidth: 100 }}
                />
            </Link>

            <nav className="navActions" aria-label="Действия">
                <RuStoreButton href={rustoreHref} />
                <BoostyButton href={boostyHref} />
            </nav>
        </header>
    );
}
