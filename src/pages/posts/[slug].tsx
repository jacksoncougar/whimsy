import PostBody from '../../components/PostBody'
import Layout from '../../components/Layout'
import { getAllPosts, getPostBySlug } from '../../lib/api'
import markdownToHtml from '../../lib/markdownToHtml'
import { PostTitle } from '../../components/PostTitle'
import readingTime from 'reading-time'



export default function Doc({ meta, content }) {
  return <Layout meta={meta}>
    <PostTitle title={meta?.title} date={meta?.date} readingTime={meta.readingTime} />
    <PostBody content={content} />
  </Layout >
}

export async function getStaticProps({ params }) {
  const doc = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ])

  const content = await markdownToHtml(doc.content || '')

  const stats = readingTime(doc.content || '')

  return {
    props: {
      meta: { date: doc.date, title: doc.title, readingTime: stats.text },
      content,
    },
  }
}

export async function getStaticPaths() {
  const docs = getAllPosts()

  return {
    paths: docs.map((doc) => {
      return {
        params: {
          slug: doc.slug,
        },
      }
    }),
    fallback: false,
  }
}