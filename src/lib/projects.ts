import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

export type ProjectFrontmatter = {
  title: string
  date: string
  summary: string
  stack: string[]
  role: string
  impact?: string[]
  links?: { repo?: string; demo?: string }
  cover?: string
}

export type Project = ProjectFrontmatter & {
  slug: string
}

const contentDir = path.join(process.cwd(), 'src', 'content', 'projects')

export function getProjectSlugs(): string[] {
  if (!fs.existsSync(contentDir)) return []
  return fs
    .readdirSync(contentDir)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''))
}

export function getAllProjects(): Project[] {
  const slugs = getProjectSlugs()
  const projects = slugs
    .map((slug) => getProjectBySlug(slug))
    .filter((p): p is Project => !!p)
    .sort((a, b) => +new Date(b.date) - +new Date(a.date))
  return projects
}

export function getProjectBySlug(slug: string): Project | null {
  const filePath = path.join(contentDir, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null
  const source = fs.readFileSync(filePath, 'utf8')
  const { data } = matter(source)
  const fm = data as ProjectFrontmatter
  return {
    slug,
    ...fm,
  }
}

export function readProjectSource(slug: string): string | null {
  const filePath = path.join(contentDir, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null
  return fs.readFileSync(filePath, 'utf8')
}

