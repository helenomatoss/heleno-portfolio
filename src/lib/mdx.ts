import { compileMDX } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import matter from 'gray-matter'
import { slugify } from './utils'

export async function compileProjectMDX(source: string) {
  const { content, data } = matter(source)
  const mdx = await compileMDX<{ [key: string]: any }>({
    source: content,
    options: {
      parseFrontmatter: false,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          rehypeSlug,
          [rehypeAutolinkHeadings, { behavior: 'wrap', properties: { className: 'anchor' } }],
        ],
      },
    },
  })
  return { ...mdx, frontmatter: data }
}

export type Heading = { id: string; text: string; level: number }

export function extractHeadingsFromMDX(raw: string): Heading[] {
  // naive regex parser for headings starting with ## or ###
  const headings: Heading[] = []
  const { content } = matter(raw)
  const lines = content.split(/\r?\n/)
  for (const line of lines) {
    const match = /^(#{2,3})\s+(.+)$/.exec(line.trim())
    if (match) {
      const level = match[1].length
      const text = match[2].replace(/#+$/, '').trim()
      headings.push({ id: slugify(text), text, level })
    }
  }
  return headings
}

