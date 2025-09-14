"use client"
import { useMemo, useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import ProjectCard from '@/components/project-card'
import type { Project } from '@/lib/projects'

export default function ProjectsClient({ projects, techs }: { projects: Project[]; techs: string[] }) {
  const [active, setActive] = useState<string>('All')
  const filtered = useMemo(() => {
    if (active === 'All') return projects
    return projects.filter((p) => p.stack?.includes(active))
  }, [active, projects])

  return (
    <div className="mt-8">
      <Tabs value={active} onValueChange={setActive}>
        <TabsList className="flex flex-wrap gap-2">
          <TabsTrigger value="All">All</TabsTrigger>
          {techs.map((t) => (
            <TabsTrigger key={t} value={t}>
              {t}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value={active}>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

