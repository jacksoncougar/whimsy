import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const pagesDirectory = join(process.cwd(), 'src/pages/posts')

export function getPostSlugs() {
  return fs.readdirSync(pagesDirectory)
    .filter((path) => /\.mdx?$/.test(path))
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.mdx$/, '')
  const fullPath = join(pagesDirectory, `${realSlug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  type Items = {
    [ key: string ]: string
  }

  const items: Items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[ field ] = realSlug
    }
    if (field === 'content') {
      items[ field ] = content
    }

    if (typeof data[ field ] !== 'undefined') {
      items[ field ] = data[ field ]
    }
  })

  return items
}

export function getAllPosts(fields: string[] = [ 'slug', 'title', 'date' ]) {
  const slugs = getPostSlugs()

  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    .sort((post1, post2) => ((post1.date || new Date()) > (post2.date || new Date()) ? -1 : 1))

  return posts
}