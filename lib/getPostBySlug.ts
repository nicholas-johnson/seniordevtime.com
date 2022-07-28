import matter from 'gray-matter'
import { join } from 'path'
import fs from 'fs'
import { marked } from 'marked'

const postsDirectory = join(process.cwd(), '_posts')

export const getPostBySlug = async ({
  folder,
  slug,
}: {
  folder: string
  slug: string
}) => {
  const fullPath = join(postsDirectory, folder, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  const html = marked.parse(content)

  return { data, content, html }
}
