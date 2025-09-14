import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { Project } from '@/lib/projects'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-40 w-full bg-gradient-to-tr from-navy-800 to-accent">
        {project.cover ? (
          <Image src={project.cover} alt="" fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover opacity-80" />
        ) : null}
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{project.title}</CardTitle>
        <p className="text-sm text-muted">{project.summary}</p>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {project.stack?.map((s) => (
            <Badge key={s}>{s}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <Button asChild variant="outline">
          <Link href={`/projects/${project.slug}`}>Read case study</Link>
        </Button>
        <div className="flex items-center gap-2 text-sm text-muted">
          {project.links?.repo ? (
            <a href={project.links.repo} target="_blank" rel="noopener" className="underline underline-offset-4 hover:text-app">
              GitHub
            </a>
          ) : null}
          {project.links?.demo ? (
            <a href={project.links.demo} target="_blank" rel="noopener" className="underline underline-offset-4 hover:text-app">
              Live demo
            </a>
          ) : null}
        </div>
      </CardFooter>
    </Card>
  )
}
