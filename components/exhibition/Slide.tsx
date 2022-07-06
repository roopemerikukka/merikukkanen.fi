import { SlideDetails } from "../../config/exhibition";

type Props = SlideDetails & {
  content: string;
}

const Slide = (props: Props) => {
  const { imgName, content, title } = props;

  return (<div className="relative">
    <img src={`/exhibition/images/${imgName}`} className="object-contain max-h-[80vh] mb-4" alt={title} />
    <div
      className="markdown"
      dangerouslySetInnerHTML={{ __html: content }} />
  </div>)
}

export default Slide;