import Image from "next/image";

type Props = {
    href: string;
    alt?: string;
    title?: string;
};

export default function GooglePlayButton({
                                             href,
                                             alt = "Скачать в Google Play",
                                             title = "Скачать в Google Play",
                                         }: Props) {
    return (
        <a
            className="storeBadgeBtn"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={alt}
            title={title}
        >
            <Image
                src="/icons/google-play.svg"
                alt={alt}
                width={210}
                height={64}
                priority
                className="storeBadgeImg"
            />
        </a>
    );
}