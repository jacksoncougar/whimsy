import { type NextPage } from "next"
import Head from "next/head"
import Link from "next/link"

import { trpc } from "../utils/trpc"
import { getAllPosts } from "../lib/api"
import Layout from "../components/Layout"
import { BlogListItem } from "../components/BlogListItem"

type Post = {
  slug: string
  title: string
  date: string
  content: string
}

type Props = {
  allPosts: Post[]
}

const Home: NextPage<Props> = ({ allPosts }: Props) => {

  // group posts by month
  const postsByMonth = allPosts.reduce((acc, post) => {
    const month = new Date(post.date).getMonth()
    if (acc[ month ] === undefined) {
      acc[ month ] = []
    }
    acc[ month ]?.push(post)
    return acc
  }, {} as Record<string, Post[]>)

  return (
    <>
      <Layout>
        <div className="w-[72rem] mx-auto flex flex-col gap-12 px-4 py-16 ">
          <h1 className="text-6xl font-bold tracking-tight text-white">
            Posts
          </h1>
          <div className="flex flex-col">
            {
              Object.values(postsByMonth).map((posts, month) => (
                <div key={month}>
                  <h2 className="text-4xl font-bold tracking-tight py-4 text-white">
                    <ul>
                      {new Date(0, month).toLocaleString('default', { month: 'long' })}
                    </ul>
                  </h2>
                  <div className="">
                    {posts.map((post) => (
                      <Link href={`/posts/${post.slug}`} key={post.slug}>
                        <BlogListItem title={post.title} date={post.date} />
                      </Link>
                    ))}
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </Layout>
    </>
  )
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

export default Home
