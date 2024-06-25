import { StaticImageData } from "next/image";
import Image from "next/image";

export default function ImageDiv({
  src,
  desc,
  alt,
  title = "",
}: {
  src: StaticImageData;
  title?: string;
  desc: string;
  alt: string;
}) {
  return (
    <div className="imageDiv">
      <Image src={src} alt={alt} className="image" quality={100} />
      <span>
        {title ? <h3 className="imageTitle">{title}</h3> : ""}
        {desc}
      </span>
    </div>
  );
}
