import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { config, Slug, slugs } from "../../config/slugs";

type Props = {
  slug: Slug;
}

const pageTitle = "Pappi, hippi ja insinööri – Vihreitä miehiä"

function Page(props: Props) {
  const { slug } = props;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <main className="p-12 max-w-[1600px] m-auto">
        <div className="flex flex-wrap lg:flex-nowrap">
          <aside className="border border-red-400 p-4 w-full lg:max-w-sm">
            <h1 className="font-bold text-xl">
              {pageTitle}
            </h1>
            <ul className="hidden lg:block">
              {slugs.map(s => (
                <li key={s} className={slug === s && "underline"}>
                  <Link href={`/vihreita-miehia/${s}`}>
                    <a>
                      {config[s].title}
                    </a>
                  </Link>
                </li>
              )
              )}
            </ul>
          </aside>
          <div className="border border-blue-400 p-4 grow w-full">
            <div>
              Navigaatio
            </div>
            <div className="border border-slate-500 p-5">
              Kuva: {config[slug].title}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
  try {
    let slug = ctx.params.slug as Slug | Slug[];
    if (Array.isArray(slug)) slug = slug.shift()
    if (!slug) slug = "intro"
    if (!slugs.includes(slug)) throw new Error("Incorrect slug");
    return {
      props: {
        slug
      }
    }
  } catch (error) {
    return {
      notFound: true
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = slugs.map(slug => ({ params: { slug: [slug] } })).concat([{ params: { slug: [] } }])

  return {
    paths,
    fallback: "blocking"
  }
}

export default Page