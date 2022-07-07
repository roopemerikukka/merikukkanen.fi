import Image from "next/image";
import { useEffect, useState } from "react";
import { SlideDetails } from "../../config/exhibition";

type Props = SlideDetails & {
  content: string;
}

const Slide = (props: Props) => {
  const { image, content, title } = props;
  const [isSmall, setIsSmall] = useState(false)

  useEffect(() => {
    const handler = () => {
      setIsSmall(window.matchMedia("(max-width: 1024px)").matches)
    }
    window.addEventListener("resize", handler)
    handler();
    return () => window.removeEventListener("resize", handler)
  }, [])

  return (<div className="relative block">
    {!isSmall && (
      <div className="block relative lg:h-[80vh] mb-4">
        <Image src={image} layout="fill" quality={100} alt={title} className="object-contain object-left" />
      </div>
    )}
    {isSmall && (
      <div className="mb-4">
        <Image src={image} layout="responsive" quality={100} alt={title} />
      </div>
    )}
    <div
      className="markdown"
      dangerouslySetInnerHTML={{ __html: content }} />
  </div>)
}

export default Slide;