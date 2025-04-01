import Image from "next/image";

export default function Social() {
  return (
    <div className="flex flex-row justify-between items-center mt-6">
      <div className="flex flex-row gap-x-3 items-center">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://x.com/jigarsu62383444"
        >
          <Image
            alt="Twitter"
            loading="lazy"
            width="22"
            height="22"
            decoding="async"
            data-nimg="1"
            src="../twitter.png"
            style={{ color: "transparent" }}
            className="mt-1 "
          />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/sutharjigar"
        >
          <Image
            alt="Github"
            loading="lazy"
            width="22"
            height="22"
            decoding="async"
            data-nimg="1"
            src="../github.png"
            style={{ color: "transparent" }}
            className="ml-1"
          />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/jigar-suthar-267300206/"
        >
          <Image
            alt="Linkedin"
            loading="lazy"
            width="22"
            height="22"
            decoding="async"
            data-nimg="1"
            src="../linkedin.png"
            style={{ color: "transparent" }}
            className="mt-0.5 ml-1"
          />
        </a>
      </div>
    </div>
  );
}
