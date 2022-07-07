import fs from 'fs';
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from 'next/router';
import path from 'path';
import Navigation from '../../components/exhibition/Navigation';
import Slide from "../../components/exhibition/Slide";
import { config, Slug, slugs } from "../../config/exhibition";
import markdownToHtml from '../../lib/helpers';

type Props = {
  slug: Slug;
  content: string;
}

const pageTitle = "Pappi, hippi ja insinööri – Vihreitä miehiä"

function Page(props: Props) {
  const { slug, content } = props;
  const { asPath } = useRouter();
  const imgName = config[slug].imgName


  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content="Millainen on vihreä mies? Yhtä vastausta siihen ei ole. Vihreitä miehiä -valokuvateos on joukon vihreitä miehiä puheenvuoro tässä keskustelussa." />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content="Millainen on vihreä mies? Yhtä vastausta siihen ei ole. Vihreitä miehiä -valokuvateos on joukon vihreitä miehiä puheenvuoro tässä keskustelussa." />
        <meta property="og:image" content={`https://merikukkanen.fi/exhibition/images/${imgName}`} />
        <meta property="og:url" content={`https://merikukkanen.fi${asPath}`} />
      </Head>
      <main className="p-4 max-w-[1600px] m-auto min-h-screen relative flex">
        <div className="flex flex-wrap lg:flex-nowrap w-full">
          <aside className="p-4 w-full lg:w-[300px] shrink-0">
            <h1 className="font-bold text-2xl lg:mb-4">
              {pageTitle}
            </h1>
            <ul className="hidden lg:block">
              {slugs.map(s => (
                <li key={s} className={`mb-1`}>
                  <Link href={`/vihreita-miehia/${s}`}>
                    <a className={`text-gray-600 hover:text-black transition-all ${s === slug ? "font-semibold text-black" : ""}`}>
                      {config[s].title}
                    </a>
                  </Link>
                </li>
              )
              )}
            </ul>
          </aside>
          <div className="p-4 grow flex flex-col">
            <div className="w-full mb-4">
              <Navigation current={slug} />
            </div>
            <div className="grow">
              <Slide {...config[slug]} content={content} />
              <Navigation current={slug} />
            </div>
          </div>
        </div>
      </main>
      <footer className="p-6">
        <Link href="https://merikukkanen.fi">
          <a>
            &copy; Salla Merikukka
          </a>
        </Link>
      </footer>
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
  try {
    let slug = ctx.params.slug as Slug | Slug[];
    if (Array.isArray(slug)) slug = slug.shift()
    if (!slug) slug = "intro"
    if (!slugs.includes(slug)) throw new Error("Incorrect slug");

    const mdFile = config[slug].mdFile;
    const markdown = fs.readFileSync(path.join(process.cwd(), `public/exhibition/texts/${mdFile}`), 'utf8')
    const content = await markdownToHtml(markdown)

    return {
      props: {
        slug,
        content
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