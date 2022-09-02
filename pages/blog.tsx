import { getAllPosts } from "../lib/api"
import Post from '../interfaces/post'
import Layout from "../components/layout";
import Link from "next/link";
import DateFormatter from "../components/date-formatter";

type Props = {
  allPosts: Post[]
}

export default function Listing({ allPosts }: Props) {
  return (
    <Layout>
      <div className="max-w-2xl mx-auto mt-10 rounded-lg bg-stone-50 p-5 space-y-4">
      <div className="text-4xl">
          <Link href="/">
            <div className="float-left hover:cursor-pointer hover:font-extrabold">
              ←
            </div>
          </Link>
          <div className="text-right font-bold">
            here are my blog articles X3
          </div>
        </div>
        {allPosts.map((post : Post) => {
          return (
            <Link href={"/posts/" + post.slug}>
              <div className="group flex-column border-2 shadow rounded-lg p-1 pl-5 font-medium hover:bg-stone-100 hover:cursor-pointer">
                <div className="text-xl group-hover:font-extrabold">
                  {post.title}
                </div>
                <div className="italic">
                  <DateFormatter dateString={post.date}/>
                </div>
                <p className="text-sm">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          )
        })}
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}