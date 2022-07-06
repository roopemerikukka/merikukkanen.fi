import Link from "next/link";
import { config, Slug } from "../../config/exhibition";

type Props = {
  current: Slug;
}

const Navigation = (props: Props) => {
  const { current } = props;
  const slugs = Object.keys(config)
  const currentIndex = slugs.indexOf(current)
  const lastIndex = slugs.length - 1
  const next = currentIndex === lastIndex ? slugs[0] : slugs[currentIndex + 1]
  const prev = currentIndex === 0 ? slugs[lastIndex] : slugs[currentIndex - 1]

  return (
    <ul className="flex text-sm">
      <li className="pr-2">
        <Link href={`/vihreita-miehia/${prev}`}>
          <a className="text-gray-600 hover:text-black transition-all">edellinen</a>
        </Link>
      </li>
      <li className="pr-2">/</li>
      <li className="pr-2">
        <Link href={`/vihreita-miehia/${next}`}>
          <a className="text-gray-600 hover:text-black transition-all">seuraava</a>
        </Link>
      </li>
    </ul>
  )

}

export default Navigation