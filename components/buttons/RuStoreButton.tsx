import Image from "next/image";

type Props = {
    href: string;
    alt?: string;
    title?: string;
};

export default function RuStoreButton({
                                          href,
                                          alt = "Скачать в RuStore",
                                          title = "Скачать в RuStore",
                                      }: Props) {
    return (
        <a
            className="storeBadgeBtn"
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={alt}
            title={title}
        >
            {/* Вся SVG — это кнопка */}
            <Image
                src="/icons/rustore-dark.svg"
                alt={alt}
                width={210}
                height={64}
                priority
                className="storeBadgeImg"
            />
        </a>
    );
}
