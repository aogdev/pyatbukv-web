import Image from "next/image";

type Props = {
    href: string;
};

export default function BoostyButton({ href }: Props) {
    return (
        <a
            className="boostyBtn"
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label="Поддержать проект"
        >
      <span className="boostyBtnInner">
        <Image
            src="/icons/boosty-color.svg"
            alt=""
            width={32}
            height={32}
            priority
            className="boostyBtnLogo"
        />

        <span className="boostyBtnText">
          <span>Поддержать</span>
          <span>проект</span>
        </span>
      </span>
        </a>
    );
}
