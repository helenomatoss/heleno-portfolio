import Section from '@/components/section'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <Section className="text-center">
      <h1 className="text-4xl font-extrabold">404 — Page not found</h1>
      <p className="mt-2 text-muted">The page you’re looking for doesn’t exist.</p>
      <div className="mt-6">
        <Button asChild>
          <Link href="/">Go back home</Link>
        </Button>
      </div>
    </Section>
  )
}

